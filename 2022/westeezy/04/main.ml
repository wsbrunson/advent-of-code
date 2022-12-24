(* (low, high) -> (low, high) -> bool *)
let tuple_contains (a, b) =
  let lowA, highA = a in
  let lowB, highB = b in
  (lowA <= lowB && highB <= highA) || (lowB <= lowA && highA <= highB)

let tuple_overlaps (a, b) =
  let lowA, highA = a in
  let lowB, highB = b in
  (lowA <= lowB && lowB <= highA)
  || (lowA <= highB && highB <= highA)
  || (lowB <= lowA && lowA <= highB)
  || (lowB <= highA && highA <= highB)

let get_tuple_range line =
  match String.split_on_char '-' line with
  | low :: high :: _rest -> (int_of_string low, int_of_string high)
  | _ -> assert false

let get_assignment line =
  match String.split_on_char ',' line with
  | first :: second :: _rest -> (get_tuple_range first, get_tuple_range second)
  | _ -> assert false

let solve1 list =
  list |> List.map get_assignment |> List.map tuple_contains
  |> List.filter (fun b -> b == true)
  |> List.length

let solve2 list =
  list |> List.map get_assignment |> List.map tuple_overlaps
  |> List.filter (fun b -> b == true)
  |> List.length

let () =
  let list = Arg.read_arg "input.txt" |> Array.to_list in
  solve1 list |> string_of_int |> print_endline;
  solve2 list |> string_of_int |> print_endline;
