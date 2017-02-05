using System;
using System.Linq;

class BombNumer
{
    static void Main()
    {
        var numbers = Console.ReadLine().Split().Select(int.Parse).ToList();
        var numAndPower = Console.ReadLine().Split().Select(int.Parse).ToArray();

        int specialNum = numAndPower[0];
        int power = numAndPower[1];

        for (int i = 0; i < numbers.Count; i++)
        {
            int left = Math.Max(i - power, 0);
            int right = Math.Min(i + power, numbers.Count - 1);
            int len = right - left + 1;

            if (numbers[i] == specialNum)
            {
                numbers.RemoveRange(left,len);
                i = 0;
            }
        }

        Console.WriteLine(numbers.Sum());
    }
}

