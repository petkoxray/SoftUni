using System;
using System.Linq;

class MaxSequence
{
    static void Main()
    {
        var numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();

        int len = 1;
        int maxLen = 1;
        int num = numbers[0];

        for (int i = 0; i < numbers.Length - 1; i++)
        {
            if (numbers[i] == numbers[i + 1])
            {
                len++;
                if (len > maxLen)
                {
                    maxLen = len;
                    num = numbers[i];
                }
            }

            else
            {
                len = 1;
            }

        }

        for (int i = 0; i < maxLen; i++)
        {
            Console.Write($"{num} ");
        }
    }
}

