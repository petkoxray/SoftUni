using System;
using System.Collections.Generic;
using System.Linq;

public class ArrayManipulator
{
    public static void Main()
    {
        var list = Console.ReadLine().Split().Select(int.Parse).ToList();

        while (true)
        {
            var input = Console.ReadLine();
            if (input.Equals("end"))
            {
                break;
            }

            var cmds = input.Split();
            switch (cmds[0])
            {
                case "exchange":
                    list = Exchange(list, cmds);
                    break;
                case "max":
                    PrintMax(list, cmds);
                    break;
                case "min":
                    PrintMin(cmds, list);
                    break;
                case "first":
                    PrintFirst(cmds, list);
                    break;
                case "last":
                    PrintLast(cmds,list);
                    break;
            }
        }

        Console.WriteLine($"[{string.Join(", ", list)}]");
    }

    private static void PrintLast(string[] cmds, List<int> list)
    {
        var count = int.Parse(cmds[1]);
        if (count > list.Count)
        {
            Console.WriteLine("Invalid count");
            return;
        }
        if (cmds[2] == "even")
        {
            var tempList = list.Where(x => x % 2 == 0).Reverse().Take(count).Reverse().ToList();
            Console.WriteLine($"[{string.Join(", ", tempList)}]");
        }
        else
        {
            var tempList = list.Where(x => x % 2 != 0).Reverse().Take(count).Reverse().ToList();
            Console.WriteLine($"[{string.Join(", ", tempList)}]");
        }
    }

    private static void PrintFirst(string[] cmds, List<int> list)
    {
        var count = int.Parse(cmds[1]);
        if (count > list.Count)
        {
            Console.WriteLine("Invalid count");
            return;
        }
        if (cmds[2] == "even")
        {
            var tempList = list.Where(x => x % 2 == 0).Take(count).ToList();
            Console.WriteLine($"[{string.Join(", ", tempList)}]");
        }
        else
        {
            var tempList = list.Where(x => x % 2 != 0).Take(count).ToList();
            Console.WriteLine($"[{string.Join(", ", tempList)}]");
        }
    }

    private static void PrintMin(string[] cmds, List<int> list)
    {
        if (cmds[1] == "even")
        {
            var filtered = list.Where(x => x % 2 == 0).ToList();
            if (filtered.Count == 0)
            {
                Console.WriteLine("No matches");
            }
            else
            {
                var num = filtered.Min();
                Console.WriteLine(list.LastIndexOf(num));
            }
        }
        else
        {
            var filtered = list.Where(x => x % 2 != 0).ToList();
            if (filtered.Count == 0)
            {
                Console.WriteLine("No matches");
                return;
            }
            var num = filtered.Min();
            Console.WriteLine(list.LastIndexOf(num));
        }
    }

    private static void PrintMax(List<int> list, string[] cmds)
    {
        if (cmds[1] == "even")
        {
            var filtered = list.Where(x => x % 2 == 0);
            if (filtered.Count() == 0)
            {
                Console.WriteLine("No matches");
                return;
            }
            var num = filtered.Max();
            Console.WriteLine(list.LastIndexOf(num));
        }
        else
        {
            var filtered = list.Where(x => x % 2 != 0);
            if (filtered.Count() == 0)
            {
                Console.WriteLine("No matches");
                return;
            }
            var num = filtered.Max();
            Console.WriteLine(list.LastIndexOf(num));
        }
    }

    private static List<int> Exchange(List<int> list, string[] cmds)
    {
        var index = int.Parse(cmds[1]);
        if (index < 0 || index >= list.Count)
        {
            Console.WriteLine("Invalid index");
            return list;
        }
        var tempList = list.Take(index + 1).ToList();
        list = list.Skip(index + 1).ToList();
        list.AddRange(tempList);
        return list;
    }
}

