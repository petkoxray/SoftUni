using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main(string[] args)
    {
        string input = Console.ReadLine();
        var userLogs = new SortedDictionary<string,Dictionary<string,int>>();

        while (!input.Equals("end"))
        {
            AddUserOrIp(userLogs,input);

            input = Console.ReadLine();
        }

        PrintResult(userLogs);

    }

    private static void AddUserOrIp(SortedDictionary<string, Dictionary<string, int>> userLogs,string input)
    {
        var commandArr = input.Split(' ');
        string userName = commandArr[2].Remove(0, 5);
        string currentIp = commandArr[0].Remove(0, 3);

        if (!userLogs.ContainsKey(userName))
        {
            userLogs.Add(userName, new Dictionary<string, int>());
        }
        if (!userLogs[userName].ContainsKey(currentIp))
        {
            userLogs[userName].Add(currentIp, 1);
        }
        else
        {
            userLogs[userName][currentIp]++;
        }
    }

    private static void PrintResult(SortedDictionary<string, Dictionary<string, int>> userLogs)
    {
        foreach (var user in userLogs)
        {
            Console.WriteLine($"{user.Key}:");
            var ips = user.Value;

            foreach (var ip in ips)
            {
                if (ip.Key != ips.Keys.Last())
                {
                    Console.Write($"{ip.Key} => {ip.Value}, ");
                }
                else
                {
                    Console.WriteLine($"{ip.Key} => {ip.Value}.");
                }
            }
        }
    }
}

