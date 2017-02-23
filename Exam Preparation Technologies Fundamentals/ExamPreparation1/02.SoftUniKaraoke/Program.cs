using System;
using System.Collections.Generic;
using System.Linq;

public class SoftUniKaraoke
{
    public static void Main()
    {
        var participants = Console.ReadLine().Split(new char[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries);
        var songs = Console.ReadLine()
            .Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries)
            .Select(x => x = x.Trim())
            .ToArray();
        var result = new Dictionary<string, List<string>>();

        while (true)
        {
            var input = Console.ReadLine();

            if (input == "dawn")
            {
                break;
            }

            var args = input.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
            var singer = args[0].Trim();
            var song = args[1].Trim();
            var award = args[2].Trim();

            if (participants.Contains(singer) && songs.Contains(song))
            {
                if (!result.ContainsKey(singer))
                {
                    var awards = new List<string>();
                    awards.Add(award);
                    result.Add(singer, awards);
                }
                else
                {
                    result[singer].Add(award);
                    result[singer] = result[singer].Distinct().ToList();
                }
            }
        }

        var finalResult = result.OrderByDescending(a => a.Value.Count).ThenBy(s => s.Key);
        var isFound = false;

        foreach (var singer in finalResult)
        {
            Console.WriteLine($"{singer.Key}: {singer.Value.Count} awards");
            foreach (var award in singer.Value.OrderBy(a => a))
            {
                Console.WriteLine($"--{award}");
            }

            isFound = true;
        }

        if (!isFound)
        {
            Console.WriteLine("No awards");
        }
    }
}