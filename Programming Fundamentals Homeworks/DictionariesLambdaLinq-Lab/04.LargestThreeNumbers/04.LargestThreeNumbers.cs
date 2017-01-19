using System;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        var numbers = Console.ReadLine().Split().Select(int.Parse).ToList();

        var result = numbers.OrderByDescending(w => w).Take(3);

        Console.WriteLine(string.Join(" ",result));
    }
}

