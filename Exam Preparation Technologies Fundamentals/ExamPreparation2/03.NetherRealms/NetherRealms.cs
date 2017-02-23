using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

class Demon
{
    public string Name { get; set; }
    public decimal Health { get; set; }
    public decimal Damage { get; set; }
}
public class NetherRealms
{
    public static void Main()
    {
        var demons = Console.ReadLine().Split(new char[] { ',', ' ' }, StringSplitOptions.RemoveEmptyEntries);
        var demonBook = new List<Demon>();

        for (int i = 0; i < demons.Length; i++)
        {
            ReadDemon(demonBook, demons[i]);
        }

        foreach (var demon in demonBook.OrderBy(d => d.Name))
        {
            Console.WriteLine($"{demon.Name} - {demon.Health} health, {demon.Damage:f2} damage");
        }
    }

    private static void ReadDemon(List<Demon> demonBook, string inputDemon)
    {
        var name = inputDemon;
        var regexHealth = new Regex(@"[^0-9\+\-\*\/\.]");
        var health = 0M;
        var damage = 0M;
        var matchesHealth = regexHealth.Matches(name);
        foreach (Match match in matchesHealth)
        {
            var str = match.Value;
            health += str[0];
        }

        var regexDamage = new Regex(@"[\+\-]*[0-9.]+[0-9]*");
        var matchesDamage = regexDamage.Matches(name);

        foreach (Match match in matchesDamage)
        {
            damage += decimal.Parse(match.Value.ToString());
        }

        while (true)
        {
            var isContainM = false;
            var isContainD = false;
            if (inputDemon.Contains('*'))
            {
                damage *= 2;
                var index = inputDemon.IndexOf('*');
                inputDemon = inputDemon.Remove(index, 1);
                isContainM = true;
            }

            if (inputDemon.Contains('/'))
            {
                damage /= 2;
                var index = inputDemon.IndexOf('/');
                inputDemon = inputDemon.Remove(index, 1);
                isContainD = true;
            }

            if (!isContainD && !isContainM)
            {
                break;
            }

        }
        var currentDemon = new Demon
        {
            Name = name,
            Damage = damage,
            Health = health
        };

        demonBook.Add(currentDemon);
    }
}

