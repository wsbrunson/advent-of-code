let determine_pts_by_symbol line =
  match line with
  | "A X" -> 4
  | "A Y" -> 8
  | "A Z" -> 3
  | "B X" -> 1
  | "B Y" -> 5
  | "B Z" -> 9
  | "C X" -> 7
  | "C Y" -> 2
  | "C Z" -> 6
  | _ -> 0

let determine_pts_by_end_state line =
  match line with
  | "A X" -> determine_pts_by_symbol("A Z")
  | "A Y" -> determine_pts_by_symbol("A X")
  | "A Z" -> determine_pts_by_symbol("A Y")
  | "B X" -> determine_pts_by_symbol("B X")
  | "B Y" -> determine_pts_by_symbol("B Y")
  | "B Z" -> determine_pts_by_symbol("B Z")
  | "C X" -> determine_pts_by_symbol("C Y")
  | "C Y" -> determine_pts_by_symbol("C Z")
  | "C Z" -> determine_pts_by_symbol("C X")
  | _ -> 0

let solve calc_score seq = seq |> Seq.map calc_score |> Seq.fold_left ( + ) 0

let () =
  let seq = Arg.read_arg "input.txt" |> Array.to_seq in
  solve determine_pts_by_symbol seq |> string_of_int |> print_endline;
  solve determine_pts_by_end_state seq |> string_of_int |> print_endline;