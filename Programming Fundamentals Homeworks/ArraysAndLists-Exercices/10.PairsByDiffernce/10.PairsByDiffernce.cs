﻿using System;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        var numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();
        int differnce = int.Parse(Console.ReadLine());
        int count = 0;

        for (int i = 0; i < numbers.Length - 1; i++)
        {
            for (int j = i + 1; j < numbers.Length; j++)
            {
                if (Math.Abs(numbers[i] - numbers[j]) == differnce)
                {
                    count++;
                }
            }
        }

        Console.WriteLine(count);
    }
}

