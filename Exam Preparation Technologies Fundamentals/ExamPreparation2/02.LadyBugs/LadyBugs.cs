using System;
using System.Linq;

public class LadyBugs
{
    public static void Main()
    {
        var fieldSize = int.Parse(Console.ReadLine());
        var ladyBugIndexes = Console.ReadLine().Split().Select(int.Parse).ToArray();
        var field = new int[fieldSize];

        foreach (var index in ladyBugIndexes)
        {
            if (index >= 0 && index < field.Length)
            {
                field[index] = 1;
            }
        }

        while (true)
        {
            var input = Console.ReadLine();
            if (input.Equals("end"))
            {
                break;
            }

            var args = input.Split();
            var bugIndex = int.Parse(args[0]);
            var direction = args[1];
            var flyLen = int.Parse(args[2]);

            if (
                bugIndex < 0 ||
                bugIndex >= field.Length ||
                field[bugIndex] == 0
                )
            {
                continue;
            }

            if (direction == "right" && flyLen < 0)
            {
                direction = "left";
                flyLen = Math.Abs(flyLen);
            }
            else if (direction == "left" && flyLen < 0)
            {
                direction = "right";
                flyLen = Math.Abs(flyLen);
            }

            if (direction == "right")
            {
                field[bugIndex] = 0;
                if (bugIndex + flyLen < field.Length && field[bugIndex + flyLen] == 0)
                {
                    field[bugIndex + flyLen] = 1;
                }
                else
                {
                    while (true)
                    {
                        flyLen += flyLen;
                        if (bugIndex + flyLen >= field.Length)
                        {
                            break;
                        }

                        if (field[bugIndex + flyLen] == 0)
                        {
                            field[bugIndex + flyLen] = 1;
                            break;
                        }
                    }
                }
            }
            else
            {
                field[bugIndex] = 0;
                if (bugIndex - flyLen >= 0 && field[bugIndex - flyLen] == 0)
                {
                    field[bugIndex - flyLen] = 1;
                }
                else
                {
                    while (true)
                    {
                        flyLen += flyLen;
                        if (bugIndex - flyLen < 0)
                        {
                            break;
                        }

                        if (field[bugIndex - flyLen] == 0)
                        {
                            field[bugIndex - flyLen] = 1;
                            break;
                        }
                    }
                }
            }

        }

        Console.WriteLine(string.Join(" ",field));
    }
}

