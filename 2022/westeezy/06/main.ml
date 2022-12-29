module CharSet = Set.Make (Char)

module Utils = struct
  let read_file_to_string filename =
    let channel = open_in filename in
    let contents = really_input_string channel (in_channel_length channel) in
    close_in channel;
    contents

  let explode s = List.init (String.length s) (String.get s)

  let rec take n list =
    match list with
    | [] -> []
    | head :: taill -> if n <= 0 then [] else head :: take (n - 1) taill

  let rec find_index predicate list =
    match list with
    | [] -> assert false
    | head :: taill ->
        if predicate head = true then 0 else 1 + find_index predicate taill

  let rec tail_listify list =
    match list with [] -> [] | _head :: taill -> list :: tail_listify taill
end

let find_marker length list =
  list |> Utils.tail_listify
  |> List.map (Utils.take length)
  |> Utils.find_index (fun list ->
         CharSet.cardinal (CharSet.of_list list) = length)
  |> ( + ) length

let solve1 list = find_marker 4 list
let solve2 list = find_marker 14 list

let () =
  let file_string = Utils.read_file_to_string "input.txt" in
  let file_char_list = Utils.explode file_string in
  solve1 file_char_list |> string_of_int |> print_endline;
  solve2 file_char_list |> string_of_int |> print_endline
