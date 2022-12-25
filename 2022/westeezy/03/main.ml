module CharSet = Set.Make (Char)

(* Made Utils Module as this got a little sloppy *)
module Utils = struct
  let explode s = List.init (String.length s) (String.get s)

  let rec list_split_at n list =
    if n = 0 then ([], list)
    else
      match list with
      | head :: tail ->
          let listA, listB = list_split_at (n - 1) tail in
          (head :: listA, listB)
      | [] -> ([], [])

  let list_split_half list = list_split_at (List.length list / 2) list

  let rec take n lst =
    match lst with
    | [] -> []
    | head :: taill -> if n <= 0 then [] else head :: take (n - 1) taill

  let rec drop n lst =
    match lst with
    | [] -> []
    | _head :: taill -> if n <= 0 then lst else drop (n - 1) taill

  let rec group_by_size size lst =
    match lst with
    | [] -> []
    | _ -> take size lst :: group_by_size size (drop size lst)

  let add_list list = List.fold_left ( + ) 0 list
end

let prioritie_character c =
  match c with
  | 'a' .. 'z' -> 1 + (int_of_char c - int_of_char 'a')
  | 'A' .. 'Z' -> 27 + (int_of_char c - int_of_char 'A')
  | _ -> assert false

let create_rucksacks line = line |> Utils.explode |> Utils.list_split_half

let find_duplicates_in_rucksack (first, second) =
  let firstSet = CharSet.of_list first in
  let secondSet = CharSet.of_list second in
  CharSet.inter firstSet secondSet |> CharSet.elements

let score_duplicates duplicates =
  duplicates |> List.map prioritie_character |> Utils.add_list

let solve1 list =
  list |> List.map create_rucksacks
  |> List.map find_duplicates_in_rucksack
  |> List.map score_duplicates |> Utils.add_list

let find_duplicates_in_group list =
  let setList = List.map CharSet.of_list list in
  setList
  |> List.fold_left CharSet.inter (List.hd setList)
  |> CharSet.elements

(* TODO: I should clean this all up, laziness = many nested lists and lack of sharing of partition logic *)
let solve2 list =
  list |> List.map Utils.explode |> Utils.group_by_size 3
  |> List.map find_duplicates_in_group
  |> List.flatten
  |> List.map prioritie_character
  |> Utils.add_list

let () =
  let list = Arg.read_arg "input.txt" |> Array.to_list in
  solve1 list |> string_of_int |> print_endline;
  solve2 list |> string_of_int |> print_endline
