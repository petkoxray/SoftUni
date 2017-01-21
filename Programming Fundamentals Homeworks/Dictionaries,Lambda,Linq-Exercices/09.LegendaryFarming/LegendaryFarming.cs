using System;
using System.Collections.Generic;
using System.Linq;

class LegendaryFarming
{
    static void Main()
    {
        var items = new Dictionary<string,int>();
        items.Add("shards", 0);
        items.Add("fragments", 0);
        items.Add("motes", 0);
        bool isFound = false;

        while (!isFound)
        {
            var input = Console.ReadLine().ToLower().Split(' ');

            ReadInput(items,input,ref isFound);
        }

        PrintItems(items);

    }

    private static void PrintItems(Dictionary<string, int> items)
    {
        var keyItems = items.Take(3).OrderByDescending(item => item.Value);
        var junkItems = items.Skip(3).OrderBy(item => item.Key);
        foreach (var item in keyItems)
        {
            Console.WriteLine($"{item.Key}: {item.Value}");
        }
        foreach (var item in junkItems)
        {
            Console.WriteLine($"{item.Key}: {item.Value}");
        }
    }

    private static void ReadInput(Dictionary<string, int> items, string[] input, ref bool isFound)
    {
        var quantity = 0;
        var material = "";

        for (int i = 1; i < input.Length; i++)
        {
            if (i % 2 == 1)
            {
                quantity = int.Parse(input[i - 1]);
                material = input[i];

                if (!items.ContainsKey(material))
                {
                    items.Add(material, quantity);
                }
                else
                {
                    items[material] += quantity;
                }
            }

            if (IsItemFound(items))
            {
                isFound = true;
                break;
            }

        }
    }

    private static bool IsItemFound(Dictionary<string, int> items)
    {
        if (items.ContainsKey("shards") && items["shards"] >= 250)
        {
            Console.WriteLine("Shadowmourne obtained!");
            items["shards"] = items["shards"] - 250;
            return true;
        }
        else if (items.ContainsKey("fragments") && items["fragments"] >= 250)
        {
            Console.WriteLine("Valanyr obtained!");
            items["fragments"] = items["fragments"] - 250;
            return true;
        }
        else if (items.ContainsKey("motes") && items["motes"] >= 250)
        {
            Console.WriteLine("Dragonwrath obtained!");
            items["motes"] = items["motes"] - 250;
            return true;
        }
        else
        {
            return false;
        }
    }
}

