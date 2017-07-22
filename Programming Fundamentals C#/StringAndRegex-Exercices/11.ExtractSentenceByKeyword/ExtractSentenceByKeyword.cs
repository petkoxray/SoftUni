using System;
using System.Linq;
using System.Text.RegularExpressions;

public class ExtractSenteceByKw
{
    public static void Main()
    {
        string keyWord = Console.ReadLine();
        string text = Console.ReadLine();

        string pattern = @"[A-Z].*?[\.\!\?]";
        var regex = new Regex(pattern);
        MatchCollection matches = regex.Matches(text);

        foreach (Match match in matches)
        {
            var currStr = match.ToString().Split(new char[] { '?', '.', '!', ' ' }, StringSplitOptions.RemoveEmptyEntries);
            if (currStr.Contains(keyWord))
            {
                Console.WriteLine(string.Join(" ", currStr));
            }
        }
    }
}

