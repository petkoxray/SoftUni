using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        var numbers = Console.ReadLine().Split().Select(decimal.Parse).ToArray();
        var realNums = new SortedDictionary<decimal, int>();

        foreach (var num in numbers)
        {
            if (realNums.ContainsKey(num))
            {
                realNums[num]++;
            }
            else
            {
                realNums[num] = 1;
            }
        }

        foreach (var num in realNums)
        {
            Console.WriteLine($"{num.Key} -> {num.Value}");
        }
    }
}

