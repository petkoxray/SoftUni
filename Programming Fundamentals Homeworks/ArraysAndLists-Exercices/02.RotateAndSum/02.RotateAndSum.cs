using System;
using System.Linq;

class RotateAndSum
{
    static void Main()
    {
        var numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();
        int rotations = int.Parse(Console.ReadLine());

        var sum = new int[numbers.Length];

        for (int rotation = 0; rotation < rotations; rotation++)
        {
            int lastElement = numbers[numbers.Length - 1];
            for (int i = numbers.Length - 1; i > 0; i--)
            {
                numbers[i] = numbers[i - 1];
            }
            numbers[0] = lastElement;

            for (int i = 0; i < sum.Length; i++)
            {
                sum[i] += numbers[i];
            }
        }

        Console.WriteLine(string.Join(" ",sum));
    }
}

