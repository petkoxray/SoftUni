using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        string input = Console.ReadLine();
        var phonebook = new Dictionary<string, string>();

        while (input != "END")
        {
            var commands = input.Split();
            string command = commands[0];
            string contact = commands[1];

            if (command == "A")
            {
                string phone = commands[2];
                phonebook[contact] = phone;
            }
            else if (command == "S")
            {
                if (phonebook.ContainsKey(contact))
                {
                    Console.WriteLine($"{contact} -> {phonebook[contact]}");
                }
                else
                {
                    Console.WriteLine($"Contact {contact} does not exist.");
                }
            }

            input = Console.ReadLine();
        }
    }
}

