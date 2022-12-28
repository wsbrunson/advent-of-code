module Utils = struct
  let read_file_to_string filename =
    let channel = open_in filename in
    let contents = really_input_string channel (in_channel_length channel) in
    close_in channel;
    contents

  let split_lines str = Str.split (Str.regexp "\n") str
  let explode s = List.init (String.length s) (String.get s)

  let rec take n list =
    match list with
    | [] -> []
    | head :: taill -> if n <= 0 then [] else head :: take (n - 1) taill

  let rec drop n list =
    match list with
    | [] -> []
    | _head :: taill -> if n > 0 then drop (n - 1) taill else list

  let replacei i replacement list =
    let rec replace lst i replacement =
      match lst with
      | [] -> []
      | hd :: tl ->
          if i = 0 then replacement :: tl
          else hd :: replace tl (i - 1) replacement
    in
    if i < 0 || i >= List.length list then list else replace list i replacement

  let string_of_char_list char_list =
    String.concat "" (List.map (String.make 1) char_list)

  let reverse list =
    let rec inner_reverse list =
      match list with
      | [] -> []
      | head :: taill -> inner_reverse taill @ [ head ]
    in
    inner_reverse list
end

let parse_config contents =
  (* crating a hardcode for now of input. TODO: parse intelligently later *)
  let _config = Utils.split_lines contents in
  [
    "CQB";
    "ZWQR";
    "VLRMB";
    "WTVHZC";
    "GVNBHZD";
    "QVFJCPNH";
    "SZWRTGD";
    "PZWBNMGC";
    "PFQWMBJN";
  ]
  |> List.map Utils.explode

type command = { quantity : int; origin : int; destination : int }

(* should use regex but the strings are pretty static so meh *)
let parse_instruction line =
  Scanf.sscanf line "%s %d %s %d %s %d"
    (fun _move quantity _from origin _to destination ->
      { quantity; origin; destination })

let parse_instructions contents =
  contents |> Utils.split_lines |> List.map parse_instruction

let parse_input input =
  match Str.split (Str.regexp "\n\nmove") input with
  (* TODO: add back parse_instructions *)
  | [ config; instructions ] ->
      (parse_config config, parse_instructions instructions)
  | _ -> assert false

let move_cargo order_fn stacks { quantity; origin; destination } =
  let origin_stack = List.nth stacks (origin - 1) in
  let destination_stack = List.nth stacks (destination - 1) in
  let new_destination =
    order_fn (Utils.take quantity origin_stack) @ destination_stack
  in
  let new_origin = Utils.drop quantity origin_stack in
  stacks
  |> Utils.replacei (origin - 1) new_origin
  |> Utils.replacei (destination - 1) new_destination

let solve1 stacks instructions =
  let new_stacks =
    instructions |> List.fold_left (move_cargo Utils.reverse) stacks
  in
  let top_elements = List.map List.hd new_stacks in
  let top_elements_string = Utils.string_of_char_list top_elements in
  top_elements_string

let solve2 stacks instructions =
  let new_stacks = instructions |> List.fold_left (move_cargo Fun.id) stacks in
  let top_elements = List.map List.hd new_stacks in
  let top_elements_string = Utils.string_of_char_list top_elements in
  top_elements_string

let () =
  let file_string = Utils.read_file_to_string "input.txt" in
  let stacks, instructions = parse_input file_string in
  solve1 stacks instructions |> print_endline;
  solve2 stacks instructions |> print_endline
