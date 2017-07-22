using System;
using System.Collections.Generic;
using System.Linq;

class Event
{
    public string EventName { get; set; }
    public List<string> Participants { get; set; }
}

public class RoliTheCoder
{
    public static void Main()
    {
        var events = new Dictionary<string, Event>();
        while (true)
        {
            var input = Console.ReadLine();
            if (input == "Time for Code")
            {
                break;
            }
            var args = input.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
            var id = args[0];
            var eventName = args[1];
            if (eventName[0] != '#')
            {
                continue;
            }
            eventName = eventName.Substring(1);
            if (!events.ContainsKey(id))
            {
                var participants = new List<string>();
                participants = args.Skip(2).ToList();
                var currentEvent = new Event { EventName = eventName, Participants = participants };
                events.Add(id, currentEvent);
                events[id].Participants = events[id].Participants.Distinct().ToList();
            }
            else if (events.ContainsKey(id) && events[id].EventName == eventName)
            {
                events[id].Participants.AddRange(args.Skip(2));
                events[id].Participants = events[id].Participants.Distinct().ToList();
            }
        }

        var result = events.OrderByDescending(p => p.Value.Participants.Count).ThenBy(e => e.Value.EventName);
        foreach (var cEvent in result)
        {
            Console.WriteLine($"{cEvent.Value.EventName} - {cEvent.Value.Participants.Count}");
            foreach (var participant in cEvent.Value.Participants.OrderBy(p => p))
            {
                Console.WriteLine(participant);
            }
        }
    }
}