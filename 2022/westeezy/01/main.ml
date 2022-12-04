let add_up_calories (curr_calories, rest_calories) line =
  match line with
  | "" -> (0, List.cons curr_calories rest_calories)
  | total -> (curr_calories + int_of_string total, rest_calories)

let top_n n calories =
  List.sort compare calories |> List.rev |> List.to_seq |> Seq.take n
  |> Seq.fold_left (fun acc x -> acc + x) 0

let solve n seq =
  Seq.fold_left add_up_calories (0, []) seq |> fun (_, calories) -> top_n n calories

let part1 = solve 1
let part2 = solve 3

let () =
  let seq = Arg.read_arg "input.txt" |> Array.to_seq in
  part1 seq |> string_of_int |> print_endline;
  part2 seq |> string_of_int |> print_endline
