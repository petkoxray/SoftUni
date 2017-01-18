using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        var numbers = Console.ReadLine().Split().Select(int.Parse).ToArray();

        var currentList = new List<int>();
        var maxList = new List<int>();
        int len = 1;

        for (int i = 1; i < numbers.Length; i++)
        {
            int prevNum = numbers[i - 1];
            if (numbers[i] > prevNum)
            {
                len++;
                if (len == 2)
                {
                    currentList.Add(prevNum);
                }
                currentList.Add(numbers[i]);

                if (currentList.Count > maxList.Count)
                {
                    maxList.Clear();
                    maxList.AddRange(currentList);
                }
            }
            else
            {
                currentList.Clear();
                len = 1;
            }
        }

        Console.WriteLine(string.Join(" ",maxList));
    }
}

