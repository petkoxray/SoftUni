using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        string input = Console.ReadLine();
        var phonebook = new SortedDictionary<string, string>();

        while (input != "END")
        {
            var commands = input.Split();
            string command = commands[0];

            if (command == "A")
            {
                string contact = commands[1];
                string phone = commands[2];
                phonebook[contact] = phone;
            }
            else if (command == "S")
            {
                string contact = commands[1];
                if (phonebook.ContainsKey(contact))
                {
                    Console.WriteLine($"{contact} -> {phonebook[contact]}");
                }
                else
                {
                    Console.WriteLine($"Contact {contact} does not exist.");
                }
            }
            else if (command == "ListAll")
            {
                foreach (var person in phonebook)
                {
                    Console.WriteLine($"{person.Key} -> {person.Value}");
                }
            }

            input = Console.ReadLine();
        }
    }
}

