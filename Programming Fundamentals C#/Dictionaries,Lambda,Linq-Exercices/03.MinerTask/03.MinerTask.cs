using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        string resource = Console.ReadLine();
        if (resource.Equals("stop"))
        {
            return;
        }
        int quantity = int.Parse(Console.ReadLine());

        var mine = new Dictionary<string, int>();

        while (!resource.Equals("stop"))
        {
            AddResource(mine,resource, quantity);

            resource = Console.ReadLine();
            if (resource.Equals("stop"))
            {
                continue;
            }
            quantity = int.Parse(Console.ReadLine());
        }

        PrintResult(mine);
    }

    private static void PrintResult(Dictionary<string, int> mine)
    {
        foreach (var item in mine)
        {
            Console.WriteLine($"{item.Key} -> {item.Value}");
        }
    }

    private static void AddResource(Dictionary<string,int> mine, string resource, int quantity)
    {
        if (mine.ContainsKey(resource))
        {
            mine[resource] += quantity;
        }
        else
        {
            mine[resource] = quantity;
        }
   }
    
}

