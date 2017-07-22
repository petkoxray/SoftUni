using System;

class MelrahShake
{
    static void Main()
    {
        var text = Console.ReadLine();
        var pattern = Console.ReadLine();

        while (true)
        {
            var firstIndex = text.IndexOf(pattern);

            if (firstIndex > -1 && pattern.Length > 0)
            {
                text = text.Remove(firstIndex, pattern.Length);
                var lastIndex = text.LastIndexOf(pattern);
                text = text.Remove(lastIndex, pattern.Length);
                Console.WriteLine("Shaked it.");
                pattern = pattern.Remove(pattern.Length / 2, 1);                               
            }
            else
            {
                Console.WriteLine("No shake.");
                break;
            }
        }

        Console.WriteLine(text);
    }
}

