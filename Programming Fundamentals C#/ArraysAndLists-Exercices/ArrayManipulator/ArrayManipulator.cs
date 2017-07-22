using System;
using System.Collections.Generic;
using System.Linq;

class ArrayManipulator
{
    static void Main()
    {
        var numbers = Console.ReadLine().Split().Select(int.Parse).ToList();
        var input = Console.ReadLine().Split();

        while (!input[0].Equals("print"))
        {
            ManipulateNumbers(numbers, input);

            input = Console.ReadLine().Split();
        }

        Console.WriteLine($"[{string.Join(", ",numbers)}]");

    }

    public static void ManipulateNumbers(List<int> numbers, string[] input)
    {
        var command = input[0];

        switch (command)
        {
            case "add":
                var index = int.Parse(input[1]);
                var element = int.Parse(input[2]);
                numbers.Insert(index, element);
                break;
            case "addMany":
                var elements = input.Skip(2).Select(int.Parse);
                numbers.InsertRange(int.Parse(input[1]), elements);
                break;
            case "contains":
                if (numbers.Contains(int.Parse(input[1])))
                {
                    Console.WriteLine(numbers.IndexOf(int.Parse(input[1])));
                }
                else
                {
                    Console.WriteLine("-1");
                }
                break;
            case "remove":
                numbers.RemoveAt(int.Parse(input[1]));
                break;
            case "shift":
                var shifts = int.Parse(input[1]);
                ShiftLeft(numbers,shifts);
                break;
            case "sumPairs":
                SumPairs(numbers);
                break;
        }
    }

    public static void SumPairs(List<int> numbers)
    {
        for (int i = 0; i < numbers.Count - 1; i++)
        {
            if (numbers.Count % 2 != 0 && numbers.Count - 1  == i )
            {
                break;
            }
            numbers[i] = numbers[i] + numbers[i + 1];
            numbers.RemoveAt(i + 1);
        }
    }

    public static void ShiftLeft(List<int> numbers,int shifts)
    {
        while (shifts > 0)
        {
            int first = numbers[0];
            numbers.RemoveAt(0);
            numbers.Add(first);
            shifts--;
        }
    }
}
