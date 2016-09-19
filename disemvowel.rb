def disemvowel(str)
  str.gsub(/[aeiou]/i, '')
end

puts disemvowel('This website is for losers LOL!')