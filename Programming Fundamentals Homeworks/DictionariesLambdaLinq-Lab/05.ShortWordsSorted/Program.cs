using System;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        char[] separators = ".,;;()[]\"'\\/!? ".ToCharArray();
        var words = Console.ReadLine()
            .ToLower()
            .Split(separators, StringSplitOptions.RemoveEmptyEntries)
            .Where(x => x.Length < 5)
            .OrderBy(x => x)
            .Distinct()
            .ToArray();

        Console.WriteLine(string.Join(", ", words));
    }
}

