using System;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        var numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();
        int k = numbers.Length / 4;

        var firstRowLeft = numbers.Take(k).Reverse();
        var firstRowRight = numbers.Skip(3 * k).Reverse();
        var firstRow = firstRowLeft.Concat(firstRowRight).ToArray();
        var secondRow = numbers.Skip(k).Take(2 * k).ToArray();

        var sum = new int[firstRow.Length];

        for (int i = 0; i < sum.Length; i++)
        {
            sum[i] = firstRow[i] + secondRow[i];
        }

        Console.WriteLine(string.Join(" ",sum));
    }
}

