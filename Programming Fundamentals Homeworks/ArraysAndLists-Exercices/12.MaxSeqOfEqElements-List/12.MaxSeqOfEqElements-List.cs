using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        var numbers = Console.ReadLine().Split().Select(long.Parse).ToList();

        int len = 1;
        int maxLen = 1;
        long equalElement = numbers[0];

        for (int i = 0; i < numbers.Count - 1; i++)
        {
            if (numbers[i] == numbers[i + 1])
            {
                len++;
                if (len > maxLen)
                {
                    maxLen = len;
                    equalElement = numbers[i];
                }
            }
            else
            {
                len = 1;
            }
        }

        for (int i = 0; i < maxLen; i++)
        {
            Console.Write(equalElement + " ");
        }
    }
}

