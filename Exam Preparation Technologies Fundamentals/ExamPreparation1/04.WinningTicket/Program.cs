using System;
using System.Text.RegularExpressions;

public class WinningTicket
{
    public static void Main()
    {
        var tickets = Console.ReadLine().Split(new char[] { ',',' ' },StringSplitOptions.RemoveEmptyEntries);
        var jackpotPattern = @"(@){20}|(\$){20}|(\^){20}|(#){20}";
        var normalPattern = @"((@){6,9}|(\$){6,9}|(#){6,9}|(\^){6,9})";
        var regexNormal = new Regex(normalPattern);
        var regexJackpot = new Regex(jackpotPattern);

        for (int i = 0; i < tickets.Length; i++)
        {
            var ticket = tickets[i];
            if (ticket.Length != 20)
            {
                Console.WriteLine("invalid ticket");
            }
            else if (regexJackpot.IsMatch(ticket))
            {
                Console.WriteLine($"ticket \"{ticket}\" - 10{ticket[2]} Jackpot!");
            }
            else
            {
                var firstHalf = ticket.Substring(0, 10);
                var secondHalf = ticket.Substring(9);
                if (regexNormal.IsMatch(firstHalf) && regexNormal.IsMatch(secondHalf))
                {
                    var firstMatch = regexNormal.Match(firstHalf).ToString();
                    var secondMatch = regexNormal.Match(secondHalf).ToString();
                    if (firstMatch[1] == secondMatch[1])
                    {
                        var minLen = Math.Min(firstMatch.Length, secondMatch.Length);
                        Console.WriteLine($"ticket \"{ticket}\" - {minLen}{firstMatch[1]}");
                    }
                    else
                    {
                        Console.WriteLine($"ticket \"{ticket}\" - no match");
                    }
                }
                else
                {
                    Console.WriteLine($"ticket \"{ticket}\" - no match");
                }
            }
        }
    }
}

