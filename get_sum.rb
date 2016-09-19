def get_sum(a, b)
  if a < b
    return (a..b).reduce(:+)
  elsif a > b
    return (b..a).reduce(:+)
  else
    return a
  end
end

puts get_sum(0, 1)
puts get_sum(0, -1)
puts get_sum(1, 2)
puts get_sum(5, -1)