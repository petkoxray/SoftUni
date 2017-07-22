using System;
using System.Collections.Generic;
using System.Linq;

class LogsAgregator
{
    static void Main(string[] args)
    {
        int numberOfLogs = int.Parse(Console.ReadLine());
        var logs = new SortedDictionary<string, SortedDictionary<string, int>>();

        for (int i = 0; i < numberOfLogs; i++)
        {
            var input = Console.ReadLine().Split(' ');
            ReadLogs(input,logs);
        }

        PrintLogs(logs);
    }

    private static void PrintLogs(SortedDictionary<string, SortedDictionary<string, int>> logs)
    {
        foreach (var user in logs)
        {
            Console.Write($"{user.Key}: {user.Value.Values.Sum()} [");
            var ips = user.Value;
            foreach (var ip in ips)
            {
                if (ip.Key != ips.Keys.Last())                
                    Console.Write($"{ip.Key}, ");
                else
                    Console.Write($"{ip.Key}");                
            }
            Console.WriteLine("]");
        }
    }

    private static void ReadLogs(string[] input, SortedDictionary<string, SortedDictionary<string, int>> logs)
    {
        var ip = input[0];
        var user = input[1];
        var duration = int.Parse(input[2]);

        if (!logs.ContainsKey(user))
        {
            logs.Add(user, new SortedDictionary<string, int>());
        }
        if (!logs[user].ContainsKey(ip))
        {
            logs[user].Add(ip, duration);
        }
        else
        {
            logs[user][ip] += duration;
        }
    }
}

