using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        string name = Console.ReadLine();
        if (name == "stop")
        {
            return;
        }
        string email = Console.ReadLine();
        var emails = new Dictionary<string, string>();

        while (!name.Equals("stop"))
        {
            AddContact(emails, name, email);

            name = Console.ReadLine();
            if (name == "stop")
            {
                break;
            }
            email = Console.ReadLine();
        }

        PrintEmails(emails);
    }

    private static void PrintEmails(Dictionary<string, string> emails)
    {
        foreach (var email in emails)
        {
            Console.WriteLine($"{email.Key} -> {email.Value}");
        }
    }

    private static void AddContact(Dictionary<string, string> emails, string name, string email)
    {
        bool iSValidEmail = email.Substring(email.Length - 2) == "uk "
                          || email.Substring(email.Length - 2) == "us";
        if (!iSValidEmail)
        {
            emails[name] = email;
        }
    }
}

