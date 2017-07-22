using System;
using System.Collections.Generic;
using System.Linq;

public class CommandInterpreter
{
    public static void Main()
    {
        var list = Console.ReadLine().Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).ToList();

        while (true)
        {
            var input = Console.ReadLine().Split().ToArray();
            if (input[0].Equals("end"))
            {
                break;
            }

            var command = input[0];

            if (command.Equals("reverse"))
            {
                ReverseList(input, list);
            }
            else if (command.Equals("sort"))
            {
                SortList(list, input);
            }
            else if (command.Equals("rollRight"))
            {
                RollRight(input, list);
            }
            else if(command.Equals("rollLeft"))
            {
                RollLeft(input, list);
            }
        }

        Console.WriteLine($"[{string.Join(", ",list)}]");
    }

    private static void RollLeft(string[] input, List<string> list)
    {
        var count = int.Parse(input[1]);
        if (count < 0)
        {
            Console.WriteLine("Invalid input parameters.");
            return;
        }
        while (count % list.Count > 0)
        {
            var temp = list.First();
            list.RemoveAt(0);
            list.Add(temp);
            count--;
        }
    }

    private static void RollRight(string[] input, List<string> list)
    {
        var count = int.Parse(input[1]);
        if (count < 0)
        {
            Console.WriteLine("Invalid input parameters.");
            return;
        }
        while (count % list.Count > 0)
        {
            list.Insert(0, list.Last());
            list.RemoveAt(list.Count - 1);
            count--;
        }
    }

    private static void SortList(List<string> list, string[] input)
    {
        var index = int.Parse(input[2]);
        var count = int.Parse(input[4]);
        if (count < 0 || index < 0 || index + count > list.Count || index >= list.Count)
        {
            Console.WriteLine("Invalid input parameters.");
            return;
        }
        var tempList = list.Skip(index).Take(count).OrderBy(x => x).ToList();
        list.RemoveRange(index, count);
        list.InsertRange(index, tempList);
    }

    private static void ReverseList(string[] input, List<string> list)
    {
        var index = int.Parse(input[2]);
        var count = int.Parse(input[4]);
        if (count < 0 || index < 0 || index + count > list.Count || index >= list.Count)
        {
            Console.WriteLine("Invalid input parameters.");
            return;
        }
        var tempList = list.Skip(index).Take(count).Reverse().ToArray();
        list.RemoveRange(index, count);
        list.InsertRange(index, tempList);
    }
}

