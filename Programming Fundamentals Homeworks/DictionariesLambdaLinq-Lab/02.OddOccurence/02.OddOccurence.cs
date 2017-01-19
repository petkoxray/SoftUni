using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        var elements = Console.ReadLine().ToLower().Split();

        var dict = new Dictionary<string, int>();

        foreach (var element in elements)
        {
            if (dict.ContainsKey(element))
            {
                dict[element]++;
            }
            else
            {
                dict[element] = 1;
            }
        }

        var resultList = new List<string>();
        foreach (var item in dict)
        {
            if (item.Value % 2 != 0)
            {
                resultList.Add(item.Key);
            }
        }

        Console.WriteLine(string.Join(", ",resultList));
    }
}

