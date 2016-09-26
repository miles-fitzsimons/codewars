def positive_sum(arr)
  sum = 0
  arr.each {|n| n > 0 ? sum += n : nil}
  return sum
end

puts positive_sum([1,2,3,4,5])
puts positive_sum([1,-2,3,4,5])
puts positive_sum([-1,2,3,4,-5])