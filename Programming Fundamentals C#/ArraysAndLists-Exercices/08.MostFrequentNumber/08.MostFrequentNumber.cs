using System;
using System.Linq;

class MostFreqNumber
{
    static void Main()
    {
        var numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();
        int maxLen = 1;
        int num = numbers[0];

        for (int i = 0; i < numbers.Length - 1; i++)
        {
            int len = 1;
            for (int j = i + 1; j < numbers.Length; j++)
            {
                if (numbers[i] == numbers[j])
                {
                    len++;
                }
            }

            if (len > maxLen)
            {
                maxLen = len;
                num = numbers[i];
            }
        }

        Console.WriteLine(num);
    }
}

