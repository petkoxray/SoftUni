using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

public class QueryMess
{
    public static void Main()
    {
        string input = Console.ReadLine();
        string pattern = @"(\w+)=([\w\\\/0-9\:\.]+)";
        string replace = @"\+|%20";

        while (!input.Equals("END"))
        {
            var result = new Dictionary<string, List<string>>();
            MatchCollection matches = Regex.Matches(input, pattern);

            for (int i = 0; i < matches.Count; i++)
            {
                var key = Regex.Replace(matches[0].Groups[1].ToString(), replace, " ").Trim();
                var value = Regex.Replace(matches[0].Groups[2].ToString(), replace, " ").Trim();

                if (!result.ContainsKey(key))
                {
                    var values = new List<string>();
                    values.Add(value);
                    result.Add(key, values);
                }
                else
                {
                    result[key].Add(value);
                }
            }

            foreach (var pair in result)
            {
                Console.Write("{0}=[{1}]", pair.Key, string.Join(", ", pair.Value));
            }
            Console.WriteLine();

            input = Console.ReadLine();
        }

    }
}

