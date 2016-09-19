def get_sum(a, b)
  a < b ? (a..b).reduce(:+) : (b..a).reduce(:+)
end

puts get_sum(0, 1)
puts get_sum(0, -1)
puts get_sum(1, 2)
puts get_sum(5, -1)
puts get_sum(5, 5)