using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

class SerbianUnleashed
{
    static void Main()
    {
        var serbianDict = new Dictionary<string, Dictionary<string, long>>();

        while (true)
        {
            var input = Console.ReadLine();
            string pattern = @"([A-Za-z\s]+)\s(@[A-Za-z\s]+)\s(\d+)\s(\d+)";
            var regex = new Regex(pattern);
            if (input.Equals("End"))
            {
                break;
            }

            var match = Regex.Match(input, pattern);

            if (match.Success)
            {
                var singer = match.Groups[1].ToString().TrimEnd();
                var venue = match.Groups[2].ToString().TrimEnd();
                venue = venue.Substring(1);
                var ticketsPrice = int.Parse(match.Groups[3].ToString());
                var ticketsCount = int.Parse(match.Groups[4].ToString());
                long totalMoney = ticketsCount * ticketsPrice;

                if (!serbianDict.ContainsKey(venue))
                {
                    var currentSinger = new Dictionary<string, long>();
                    currentSinger.Add(singer, totalMoney);
                    serbianDict.Add(venue, currentSinger);
                }
                else if (!serbianDict[venue].ContainsKey(singer))
                {
                    serbianDict[venue].Add(singer,totalMoney);
                }
                else
                {
                    serbianDict[venue][singer] += totalMoney;
                }

            }

        }

        foreach (var venue in serbianDict)
        {
            Console.WriteLine(venue.Key);
            foreach (var singer in venue.Value.OrderByDescending(m => m.Value))
            {
                Console.WriteLine($"#  {singer.Key} -> {singer.Value}");
            }
        }
    }

}

