using System;
using System.Text;
using System.Text.RegularExpressions;

public class Program
{
    public static void Main()
    {
        while (true)
        {
            var input = Console.ReadLine();
            if (input.Equals("Over!"))
            {
                break;
            }

            int count = int.Parse(Console.ReadLine());
            var regex = new Regex(@"(^[0-9]+)([a-zA-Z]{" + count + @"})([^a-zA-Z]*$)");
            if (regex.IsMatch(input))
            {
                var sb = new StringBuilder();
                var match = regex.Match(input);
                var beforeMessage = match.Groups[1].ToString();
                var message = match.Groups[2].ToString();
                var aferMessage = match.Groups[3].ToString();

                for (int i = 0; i < beforeMessage.Length; i++)
                {
                    if (char.IsDigit(beforeMessage[i]))
                    {
                        var index = int.Parse(beforeMessage[i].ToString());
                        if (index >= 0 && index < message.Length)
                        {
                            sb.Append(message[index]);
                        }
                        else
                        {
                            sb.Append(" ");
                        }
                    }
                    else
                    {
                        sb.Append(" ");
                    }
                }

                for (int i = 0; i < aferMessage.Length; i++)
                {
                    if (char.IsDigit(aferMessage[i]))
                    {
                        var index = int.Parse(aferMessage[i].ToString());
                        if (index >= 0 && index < message.Length)
                        {
                            sb.Append(message[index]);
                        }
                        else
                        {
                            sb.Append(" ");
                        }
                    }
                    else
                    {
                        sb.Append(" ");
                    }
                }

                Console.WriteLine($"{message} == {sb}");
            }
        }
    }
}

