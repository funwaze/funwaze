const active1 = [
    ["CA00000001", "Yosemite National Park", "National Park", "Hiking and sightseeing", "Yosemite Valley", "Yosemite", "95389", "Explore stunning landscapes and natural wonders in the park", "No", "Yes", "Yes", "Outdoors", "24/7", "Entry Fee", "No", "Hiking Nature Scenery Outdoors"],
    ["CA00000002", "San Francisco Zoo", "Zoo", "Explore animal exhibits", "Sloat Boulevard & Skyline Boulevard", "San Francisco", "94132", "Visit diverse animal habitats and enjoy educational exhibits", "No", "Yes", "Yes", "Outdoors", "Daily 10am-5pm", "Admission Fee", "Yes", "Zoo Animals Wildlife Family"],
    ["CA00000003", "Golden Gate Park", "Park", "Explore gardens and museums", "501 Stanyan Street", "San Francisco", "94117", "Enjoy a large urban park with multiple attractions and green spaces", "No", "Yes", "Yes", "Outdoors", "24/7", "Free", "Yes", "Parks Gardens Museums Outdoor"],
    ["CA00000004", "Griffith Observatory", "Observatory", "Stargazing and science exhibits", "2800 E Observatory Road", "Los Angeles", "90027", "Explore the universe through exhibits and telescopes", "No", "Yes", "Yes", "Outdoors/Indoors", "Tuesday-Sunday 12pm-10pm", "Free", "No", "Stargazing Science Telescopes Education"],
    ["CA00000005", "Getty Center", "Museum", "Art exhibits and gardens", "1200 Getty Center Drive", "Los Angeles", "90049", "Explore art collections and beautiful gardens", "No", "Yes", "Yes", "Outdoors/Indoors", "Tuesday-Sunday 10am-5:30pm", "Free", "Yes", "Art Gardens Architecture Museum"],
    ["CA00000006", "La Jolla Cove", "Beach", "Swimming and scenic views", "1100 Coast Boulevard", "La Jolla", "92037", "Enjoy beautiful ocean views and swimming in a picturesque cove", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Beach Swimming Scenic Relaxation"],
    ["CA00000007", "Disneyland Park", "Theme Park", "Amusement rides and entertainment", "1313 Disneyland Resort", "Anaheim", "92802", "Experience thrilling rides and shows in a themed park", "No", "Yes", "Yes", "Outdoors", "Daily 8am-12am", "Admission Fee", "Yes", "Theme Park Rides Entertainment Family"],
    ["CA00000008", "Hollywood Walk of Fame", "Attraction", "See celebrity stars", "Hollywood Boulevard", "Los Angeles", "90028", "Walk along the sidewalk and view the stars of famous personalities", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Hollywood Stars Celebrity Walk Tourism"],
    ["CA00000009", "Santa Monica Pier", "Pier", "Amusement park and dining", "200 Santa Monica Pier", "Santa Monica", "90401", "Enjoy rides, dining, and shopping at the iconic pier", "No", "Yes", "Yes", "Outdoors", "Daily 11am-10pm", "Varies", "Yes", "Pier Rides Dining Shopping"],
    ["CA00000010", "Rodeo Drive", "Shopping District", "Luxury shopping", "Rodeo Drive", "Beverly Hills", "90210", "Shop at high-end luxury stores in a famous district", "No", "No", "Yes", "Outdoors", "24/7", "Varies", "Yes", "Shopping Luxury Fashion Beverly Hills"],
    ["CA00000011", "Laguna Beach", "Beach", "Relax and swim", "Laguna Beach", "Laguna Beach", "92651", "Enjoy a beautiful beach for swimming and relaxation", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Beach Swimming Relaxation Scenic"],
    ["CA00000012", "Death Valley National Park", "National Park", "Explore desert landscapes", "California-Nevada Border", "Death Valley", "92328", "Discover extreme desert landscapes and unique features", "No", "Yes", "Yes", "Outdoors", "24/7", "Entry Fee", "No", "Desert Nature Hiking Scenic"],
    ["CA00000013", "Big Sur", "Scenic Drive", "Explore coastal views", "Highway 1", "Big Sur", "93920", "Enjoy breathtaking coastal views along the scenic highway", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Scenic Drive Coastal Views Nature"],
    ["CA00000014", "Napa Valley", "Wine Country", "Wine tasting and tours", "Napa Valley", "Napa", "94558", "Experience wine tasting and scenic vineyards in the valley", "No", "Yes", "Yes", "Outdoors/Indoors", "Varies by Winery", "Varies", "Yes", "Wine Tasting Vineyards Scenic"],
    ["CA00000015", "San Diego Zoo Safari Park", "Safari Park", "Wildlife exhibits and safaris", "15500 San Pasqual Valley Road", "Escondido", "92027", "Experience a safari adventure with diverse wildlife", "No", "Yes", "Yes", "Outdoors", "Daily 9am-5pm", "Admission Fee", "Yes", "Safari Wildlife Animals Adventure"],
    ["CA00000016", "Mono Lake", "Lake", "Explore unique lake features", "Mono Basin", "Lee Vining", "93541", "Discover the unique tufa formations and wildlife of Mono Lake", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Lake Tufa Scenic Nature"],
    ["CA00000017", "Solvang", "Town", "Explore Danish-style architecture", "Main Street", "Solvang", "93463", "Experience Danish culture and architecture in this charming town", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Danish Architecture Shopping"],
    ["CA00000018", "Carmel-by-the-Sea", "Town", "Explore charming shops and beaches", "Ocean Avenue", "Carmel-by-the-Sea", "93921", "Enjoy quaint shops, galleries, and beautiful beaches", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Shops Beach Scenic"],
    ["CA00000019", "Palm Springs Aerial Tramway", "Tramway", "Scenic tram ride", "1 Tram Way", "Palm Springs", "92262", "Enjoy a tram ride with stunning views of the desert below", "No", "Yes", "Yes", "Outdoors/Indoors", "Daily 10am-10pm", "Admission Fee", "No", "Tram Ride Views Desert"],
    ["CA00000020", "Sequoia National Park", "National Park", "Explore giant sequoias", "47050 Generals Highway", "Three Rivers", "93271", "See the towering giant sequoias and explore scenic trails", "No", "Yes", "Yes", "Outdoors", "24/7", "Entry Fee", "No", "Sequoias Hiking Nature Scenic"],
    ["CA00000021", "Santa Monica Mountains National Recreation Area", "Recreation Area", "Hiking and scenic views", "Santa Monica Mountains", "Los Angeles", "90290", "Explore trails and enjoy stunning mountain views", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Hiking Scenic Nature Trails"],
    ["CA00000022", "El Capitan Theatre", "Theater", "Watch classic films", "6838 Hollywood Boulevard", "Los Angeles", "90028", "Enjoy classic films and special events in a historic theater", "No", "Yes", "Yes", "Indoors", "Varies by event", "Ticket Price", "No", "Theater Films Hollywood Historic"],
    ["CA00000023", "Lake Tahoe", "Lake", "Outdoor recreation", "Lake Tahoe", "South Lake Tahoe", "96150", "Enjoy outdoor activities such as skiing, hiking, and boating", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Lake Recreation Scenic Outdoor"],
    ["CA00000024", "Balboa Park", "Park", "Explore museums and gardens", "1549 El Prado", "San Diego", "92101", "Enjoy museums, gardens, and cultural institutions in a large park", "No", "Yes", "Yes", "Outdoors", "Monday-Saturday 9am-5pm", "Free", "Yes", "Parks Museums Gardens Culture"],
    ["CA00000025", "San Diego Zoo", "Zoo", "Explore animal exhibits", "2920 Zoo Drive", "San Diego", "92101", "See a wide variety of animals and enjoy family-friendly attractions", "No", "Yes", "Yes", "Outdoors", "Daily 9am-4pm", "Admission Fee", "Yes", "Zoo Animals Wildlife Family"],
    ["CA00000026", "Sacramento Zoo", "Zoo", "Explore animal exhibits", "3930 W Land Park Drive", "Sacramento", "95822", "Visit various animal habitats and enjoy educational exhibits", "No", "Yes", "Yes", "Outdoors", "Daily 10am-4pm", "Admission Fee", "Yes", "Zoo Animals Wildlife Family"],
    ["CA00000027", "Disney California Adventure Park", "Theme Park", "Amusement rides and shows", "1313 Disneyland Resort", "Anaheim", "92802", "Experience rides, shows, and attractions at a Disney park", "No", "Yes", "Yes", "Outdoors", "Daily 8am-10pm", "Admission Fee", "Yes", "Theme Park Rides Entertainment"],
    ["CA00000028", "Griffith Park", "Park", "Explore hiking trails and attractions", "4730 Crystal Springs Drive", "Los Angeles", "90027", "Enjoy hiking trails, the observatory, and other park attractions", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Hiking Trails Park Attractions"],
    ["CA00000029", "Monterey Bay Aquarium", "Aquarium", "Explore marine life", "886 Cannery Row", "Monterey", "93940", "Discover marine life and exhibits at the renowned aquarium", "No", "Yes", "Yes", "Indoors", "Daily 10am-5pm", "Admission Fee", "Yes", "Aquarium Marine Life Education"],
    ["CA00000030", "Hearst Castle", "Historic Castle", "Tour historic castle", "750 Hearst Castle Road", "San Simeon", "93452", "Tour the opulent castle and learn about its history", "No", "Yes", "Yes", "Indoors/Outdoors", "Varies by tour", "Admission Fee", "No", "Castle History Tours Historic"],
    ["CA00000031", "Point Reyes National Seashore", "Seashore", "Explore coastal landscapes", "1 Bear Valley Road", "Point Reyes Station", "94956", "Enjoy scenic coastal views and hiking trails", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Coastal Views Hiking Nature"],
    ["CA00000032", "Huntington Beach", "Beach", "Surfing and relaxation", "Main Street and Pacific Coast Highway", "Huntington Beach", "92648", "Enjoy surfing, sunbathing, and beach activities", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Beach Surfing Relaxation"],
    ["CA00000033", "Joshua Tree National Park", "National Park", "Explore desert landscapes", "California Highway 62", "Joshua Tree", "92252", "Discover unique desert landscapes and rock formations", "No", "Yes", "Yes", "Outdoors", "24/7", "Entry Fee", "No", "Desert Nature Hiking Scenic"],
    ["CA00000034", "Sequoia National Park", "National Park", "See giant sequoias", "47050 Generals Highway", "Three Rivers", "93271", "Visit the giant sequoias and explore the park's scenic beauty", "No", "Yes", "Yes", "Outdoors", "24/7", "Entry Fee", "No", "Sequoias Nature Hiking Scenic"],
    ["CA00000035", "Palm Springs Art Museum", "Museum", "Explore art collections", "101 Museum Drive", "Palm Springs", "92262", "View a variety of art collections and exhibitions", "No", "Yes", "Yes", "Indoors", "Tuesday-Sunday 10am-5pm", "Admission Fee", "No", "Art Museum Exhibits Collections"],
    ["CA00000036", "L.A. County Museum of Art", "Museum", "Explore art collections", "5905 Wilshire Boulevard", "Los Angeles", "90036", "Discover a wide range of art from various periods and cultures", "No", "Yes", "Yes", "Indoors", "Daily 11am-5pm", "Admission Fee", "Yes", "Art Museum Collections Exhibits"],
    ["CA00000037", "Griffith Park Observatory", "Observatory", "Stargazing and exhibits", "2800 E Observatory Road", "Los Angeles", "90027", "Enjoy stargazing and science exhibits at the observatory", "No", "Yes", "Yes", "Outdoors/Indoors", "Tuesday-Sunday 12pm-10pm", "Free", "No", "Stargazing Science Telescopes Education"],
    ["CA00000038", "Santa Barbara Zoo", "Zoo", "Explore animal exhibits", "500 Ninos Drive", "Santa Barbara", "93103", "Visit animal exhibits and enjoy interactive activities", "No", "Yes", "Yes", "Outdoors", "Daily 10am-5pm", "Admission Fee", "Yes", "Zoo Animals Wildlife Family"],
    ["CA00000039", "Lake Arrowhead", "Lake", "Outdoor activities", "Lake Arrowhead", "Lake Arrowhead", "92352", "Enjoy boating, hiking, and scenic views at the lake", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Lake Boating Hiking Scenic"],
    ["CA00000040", "Napa Valley Wine Train", "Train Tour", "Wine tasting and scenic views", "1275 McKinstry Street", "Napa", "94559", "Experience a wine tasting journey on a historic train", "No", "Yes", "Yes", "Indoors", "Varies by schedule", "Ticket Price", "Yes", "Wine Train Scenic Tasting"],
    ["CA00000041", "Catalina Island", "Island", "Explore island attractions", "Catalina Island", "Avalon", "90704", "Discover activities such as snorkeling, hiking, and exploring the island", "No", "Yes", "Yes", "Outdoors", "24/7", "Varies", "Yes", "Island Activities Scenic Nature"],
    ["CA00000042", "Laguna Niguel Regional Park", "Park", "Outdoor activities", "28241 La Paz Road", "Laguna Niguel", "92677", "Enjoy trails, picnicking, and lake views in the regional park", "Free", "Yes", "Yes", "Outdoors", "7am-Dusk", "Free", "No", "Park Trails Picnic Lake"],
    ["CA00000043", "Venice Beach Boardwalk", "Boardwalk", "Beachfront entertainment", "Ocean Front Walk", "Venice", "90291", "Experience street performers, shops, and beach activities", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "Yes", "Boardwalk Beach Entertainment"],
    ["CA00000044", "Universal Studios Hollywood", "Theme Park", "Amusement rides and attractions", "100 Universal City Plaza", "Universal City", "91608", "Enjoy rides, shows, and attractions in a movie-themed park", "No", "Yes", "Yes", "Outdoors", "Daily 9am-10pm", "Admission Fee", "Yes", "Theme Park Rides Entertainment"],
    ["CA00000045", "San Jose Museum of Art", "Museum", "Explore contemporary art", "110 S Market Street", "San Jose", "95113", "View contemporary art exhibits and collections", "No", "Yes", "Yes", "Indoors", "Tuesday-Sunday 11am-5pm", "Admission Fee", "No", "Art Museum Contemporary Exhibits"],
    ["CA00000046", "Monterey Peninsula", "Scenic Area", "Explore coastal scenery", "Monterey Peninsula", "Monterey", "93940", "Enjoy beautiful coastal views and outdoor activities", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Coastal Scenic Nature Outdoors"],
    ["CA00000047", "El Matador Beach", "Beach", "Relax and explore rocky coastline", "El Matador Beach Parking Lot", "Malibu", "90265", "Enjoy a secluded beach with beautiful rock formations", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Beach Secluded Rocky Coastline"],
    ["CA00000048", "Riverside Art Museum", "Museum", "Explore art exhibits", "3425 Mission Inn Avenue", "Riverside", "92501", "View a range of art exhibitions and collections", "No", "Yes", "Yes", "Indoors", "Tuesday-Saturday 10am-4pm", "Admission Fee", "No", "Art Museum Exhibits Riverside"],
    ["CA00000049", "Palm Desert Aquatic Center", "Aquatic Center", "Swimming and water slides", "73751 Magnesia Falls Drive", "Palm Desert", "92260", "Enjoy swimming pools and water slides for all ages", "No", "Yes", "Yes", "Outdoors", "Daily 9am-5pm", "Admission Fee", "Yes", "Swimming Water Slides Family"],
    ["CA00000050", "Dinosaur Caves Park", "Park", "Playground and scenic views", "27th Street and Pacific Coast Highway", "Pismo Beach", "93449", "Explore a park with dinosaur-themed play areas and ocean views", "Free", "Yes", "Yes", "Outdoors", "7am-Dusk", "Free", "No", "Playground Scenic Dinosaurs Beach"],
    ["CA00000051", "Big Bear Lake", "Lake", "Outdoor recreation", "Big Bear Lake", "Big Bear Lake", "92315", "Enjoy activities such as fishing, boating, and hiking around the lake", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Lake Fishing Boating Hiking"],
    ["CA00000052", "San Francisco Maritime National Historical Park", "Park", "Explore maritime history", "2905 Hyde Street", "San Francisco", "94109", "Visit historic ships and maritime exhibits", "No", "Yes", "Yes", "Outdoors/Indoors", "Daily 9:30am-5pm", "Admission Fee", "No", "Maritime History Ships Exhibits"],
    ["CA00000053", "The Exploratorium", "Museum", "Interactive science museum", "Pier 15", "San Francisco", "94111", "Engage with interactive exhibits and science activities", "No", "Yes", "Yes", "Indoors", "Tuesday-Sunday 10am-5pm", "Admission Fee", "Yes", "Science Interactive Exhibits Education"],
    ["CA00000054", "Muir Woods National Monument", "National Monument", "Explore redwood trees", "1 Muir Woods Road", "Mill Valley", "94941", "Walk among ancient redwood trees in a serene forest", "No", "Yes", "Yes", "Outdoors", "Daily 8am-5pm", "Entry Fee", "No", "Redwoods Nature Hiking Scenic"],
    ["CA00000055", "Santa Barbara Botanic Garden", "Botanic Garden", "Explore native plants", "1212 Mission Canyon Road", "Santa Barbara", "93105", "Discover California native plants and gardens", "No", "Yes", "Yes", "Outdoors", "Daily 9am-5pm", "Admission Fee", "No", "Botanic Garden Plants Nature"],
    ["CA00000056", "California Science Center", "Museum", "Science exhibits and IMAX theater", "700 Exposition Park Drive", "Los Angeles", "90037", "Explore science exhibits and watch IMAX films", "No", "Yes", "Yes", "Indoors", "Tuesday-Sunday 10am-5pm", "Free", "Yes", "Science Exhibits IMAX Education"],
    ["CA00000057", "L.A. Live", "Entertainment Complex", "Restaurants, shops, and entertainment", "800 W Olympic Boulevard", "Los Angeles", "90015", "Enjoy a variety of dining, shopping, and entertainment options", "No", "Yes", "Yes", "Outdoors/Indoors", "Varies by venue", "Varies", "Yes", "Entertainment Dining Shopping"],
    ["CA00000058", "Napa Valley Balloons", "Balloon Ride", "Hot air balloon rides", "Napa Valley", "Napa", "94558", "Experience breathtaking views from a hot air balloon", "No", "Yes", "Yes", "Outdoors", "Varies by weather", "Ticket Price", "No", "Balloon Ride Scenic Views Adventure"],
    ["CA00000059", "Old Sacramento", "Historic District", "Explore historic buildings and shops", "Sacramento", "Sacramento", "95814", "Visit historic buildings and enjoy shops and restaurants", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "Yes", "Historic District Shops Restaurants"],
    ["CA00000060", "Chinatown San Francisco", "Neighborhood", "Explore cultural attractions", "Grant Avenue", "San Francisco", "94108", "Experience cultural attractions, shops, and restaurants", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "Culture Shopping Dining"],
    ["CA00000061", "Palos Verdes Peninsula", "Scenic Area", "Explore coastal views and trails", "Palos Verdes Peninsula", "Palos Verdes Estates", "90274", "Enjoy coastal views, trails, and scenic beauty", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "Coastal Views Trails Nature"],
    ["CA00000062", "Torrance Beach", "Beach", "Relax and swim", "Torrance Beach", "Torrance", "90503", "Enjoy a beach day with swimming and relaxation", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Beach Swimming Relaxation"],
    ["CA00000063", "Temecula Wine Country", "Wine Country", "Wine tasting and tours", "Temecula Valley", "Temecula", "92590", "Enjoy wine tasting and scenic views in wine country", "No", "Yes", "Yes", "Outdoors/Indoors", "Varies by Winery", "Varies", "Yes", "Wine Tasting Scenic Vineyards"],
    ["CA00000064", "Redwood National and State Parks", "National and State Parks", "Explore redwood forests", "Redwood Highway", "Crescent City", "95531", "Hike and explore the majestic redwoods in the parks", "No", "Yes", "Yes", "Outdoors", "24/7", "Entry Fee", "No", "Redwoods Nature Hiking Scenic"],
    ["CA00000065", "Point Lobos State Natural Reserve", "State Natural Reserve", "Explore coastal landscapes", "Route 1", "Carmel", "93923", "Discover coastal trails and marine life at the reserve", "No", "Yes", "Yes", "Outdoors", "Daily 8am-5pm", "Entry Fee", "No", "Coastal Trails Marine Life"],
    ["CA00000066", "Avalon Theater", "Theater", "Watch classic movies", "1 Avalon Canyon Road", "Avalon", "90704", "Enjoy classic films in a historic theater on Catalina Island", "No", "Yes", "Yes", "Indoors", "Varies by show", "Ticket Price", "No", "Classic Movies Theater Catalina"],
    ["CA00000067", "Santa Monica State Beach", "Beach", "Relax and play", "Santa Monica Beach", "Santa Monica", "90401", "Enjoy sunbathing, swimming, and beach activities", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Beach Swimming Relaxation"],
    ["CA00000068", "Alcatraz Island", "Island", "Tour historic prison", "Pier 33", "San Francisco", "94123", "Tour the infamous former prison and learn its history", "No", "Yes", "Yes", "Indoors/Outdoors", "Varies by tour", "Ticket Price", "No", "Historic Prison Tour"],
    ["CA00000069", "Hollywood Bowl", "Amphitheater", "Concerts and performances", "2301 N Highland Avenue", "Los Angeles", "90068", "Enjoy live music and performances in an iconic amphitheater", "No", "Yes", "Yes", "Outdoors", "Varies by event", "Ticket Price", "Yes", "Concerts Music Outdoor"],
    ["CA00000070", "Natural History Museum of Los Angeles County", "Museum", "Explore natural history exhibits", "900 Exposition Boulevard", "Los Angeles", "90007", "Discover exhibits on natural history and paleontology", "No", "Yes", "Yes", "Indoors", "Daily 9:30am-5pm", "Admission Fee", "Yes", "Natural History Exhibits Education"],
    ["CA00000071", "LACMA", "Museum", "Explore art collections", "5905 Wilshire Boulevard", "Los Angeles", "90036", "Explore a diverse collection of art from around the world", "No", "Yes", "Yes", "Indoors", "Daily 11am-5pm", "Admission Fee", "Yes", "Art Museum Collections Exhibits"],
    ["CA00000072", "California Academy of Sciences", "Museum", "Science and natural history exhibits", "55 Music Concourse Drive", "San Francisco", "94118", "Explore exhibits on science, natural history, and an aquarium", "No", "Yes", "Yes", "Indoors", "Daily 9:30am-5pm", "Admission Fee", "Yes", "Science Museum Aquarium Exhibits"],
    ["CA00000073", "Beverly Hills Hotel", "Hotel", "Historic hotel and dining", "9641 Sunset Boulevard", "Beverly Hills", "90210", "Experience the luxury and history of this famous hotel", "No", "Yes", "Yes", "Indoors", "24/7", "Varies", "Yes", "Historic Hotel Luxury Dining"],
    ["CA00000074", "Santa Cruz Beach Boardwalk", "Boardwalk", "Amusement park and arcade", "400 Beach Street", "Santa Cruz", "95060", "Enjoy rides, games, and attractions at the beach boardwalk", "No", "Yes", "Yes", "Outdoors", "Daily 11am-10pm", "Varies", "Yes", "Boardwalk Amusement Park Rides"],
    ["CA00000075", "San Diego Zoo Safari Park", "Safari Park", "Explore wildlife in natural habitats", "15500 San Pasqual Valley Road", "Escondido", "92027", "Experience wildlife in expansive, naturalistic habitats", "No", "Yes", "Yes", "Outdoors", "Daily 9am-5pm", "Admission Fee", "Yes", "Safari Park Wildlife Animals"],
    ["CA00000076", "Malibu Pier", "Pier", "Fishing and dining", "23000 Pacific Coast Highway", "Malibu", "90265", "Enjoy fishing and dining with ocean views at the pier", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Pier Fishing Dining Ocean Views"],
    ["CA00000077", "Los Angeles County Arboretum and Botanic Garden", "Arboretum", "Explore gardens and nature", "301 N Baldwin Avenue", "Arcadia", "91007", "Discover a variety of gardens and natural landscapes", "No", "Yes", "Yes", "Outdoors", "Daily 9am-5pm", "Admission Fee", "No", "Gardens Nature Arboretum"],
    ["CA00000078", "Hollywood Walk of Fame", "Walk of Fame", "Explore celebrity stars", "Hollywood Boulevard", "Los Angeles", "90028", "Visit the famous stars on the Hollywood Walk of Fame", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "Yes", "Hollywood Stars Walk of Fame"],
    ["CA00000079", "Riley's Farm", "Farm", "Historical farm tours and activities", "12261 Apple Valley Road", "Oak Glen", "92399", "Experience historical farm life with tours and activities", "No", "Yes", "Yes", "Outdoors", "Varies by season", "Ticket Price", "No", "Farm Historical Tours Activities"],
    ["CA00000080", "California State Railroad Museum", "Museum", "Explore railroad history", "125 I Street", "Sacramento", "95814", "Discover the history of railroads and explore train exhibits", "No", "Yes", "Yes", "Indoors", "Daily 10am-5pm", "Admission Fee", "Yes", "Railroad History Museum Exhibits"],
    ["CA00000081", "Laguna Beach", "Beach", "Relax and enjoy the surf", "Laguna Beach", "Laguna Beach", "92651", "Enjoy the beautiful beach and surf at Laguna Beach", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Beach Surfing Relaxation"],
    ["CA00000082", "Mammoth Mountain", "Mountain", "Skiing and snowboarding", "Mammoth Lakes", "Mammoth Lakes", "93546", "Enjoy skiing, snowboarding, and mountain activities", "No", "Yes", "Yes", "Outdoors", "Varies by season", "Varies", "Yes", "Skiing Snowboarding Mountain Activities"],
    ["CA00000083", "Oceano Dunes State Vehicular Recreation Area", "Recreation Area", "Off-roading and dunes", "Highway 1", "Oceano", "93445", "Experience off-roading and dune activities in a recreation area", "No", "Yes", "Yes", "Outdoors", "24/7", "Entry Fee", "No", "Off-Roading Dunes Recreation"],
    ["CA00000084", "Venice Canals", "Canals", "Explore historic canals", "Venice Boulevard", "Venice", "90291", "Explore the picturesque canals of Venice Beach", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "Yes", "Canals Historic Venice"],
    ["CA00000085", "Death Valley National Park", "National Park", "Explore desert landscapes", "California Highway 190", "Death Valley", "92328", "Discover the extreme desert landscapes and unique features", "No", "Yes", "Yes", "Outdoors", "24/7", "Entry Fee", "No", "Desert Nature Scenic"],
    ["CA00000086", "Lassen Volcanic National Park", "National Park", "Explore volcanic landscapes", "38050 Highway 89", "Mineral", "96063", "Explore volcanic landscapes and geothermal features", "No", "Yes", "Yes", "Outdoors", "24/7", "Entry Fee", "No", "Volcanic Landscapes Nature Scenic"],
    ["CA00000087", "Santa Catalina Island", "Island", "Outdoor activities and relaxation", "Catalina Island", "Avalon", "90704", "Enjoy outdoor activities, shopping, and relaxation on Catalina Island", "No", "Yes", "Yes", "Outdoors", "24/7", "Varies", "Yes", "Island Activities Scenic Nature"],
    ["CA00000088", "Laguna Beach Art Museum", "Museum", "Explore contemporary art", "307 Cliff Drive", "Laguna Beach", "92651", "View contemporary art exhibits in a beachside setting", "No", "Yes", "Yes", "Indoors", "Tuesday-Sunday 11am-5pm", "Admission Fee", "No", "Art Museum Contemporary Exhibits"],
    ["CA00000089", "Cathedral City", "City", "Explore local attractions", "Cathedral City", "Cathedral City", "92234", "Explore local attractions and events in Cathedral City", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "Yes", "Local Attractions Events"],
    ["CA00000090", "Anza-Borrego Desert State Park", "State Park", "Explore desert landscapes", "Anza-Borrego Desert", "Borrego Springs", "92004", "Explore the desert landscapes and seasonal wildflower blooms", "No", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Desert Nature Scenic Wildflowers"],
    ["CA00000091", "Joshua Tree Music Festival", "Festival", "Music and arts festival", "Joshua Tree", "Joshua Tree", "92252", "Enjoy music, arts, and camping at the Joshua Tree Music Festival", "No", "Yes", "Yes", "Outdoors", "Varies by event", "Ticket Price", "Yes", "Music Festival Arts Camping"],
    ["CA00000092", "L.A. Live Concerts", "Concert Venue", "Live music events", "800 W Olympic Boulevard", "Los Angeles", "90015", "Enjoy live music concerts and events at L.A. Live", "No", "Yes", "Yes", "Indoors", "Varies by event", "Ticket Price", "Yes", "Concerts Music Events"],
    ["CA00000093", "Laguna Beach", "Beach", "Relax and enjoy the surf", "Laguna Beach", "Laguna Beach", "92651", "Enjoy the beautiful beach and surf at Laguna Beach", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Beach Surfing Relaxation"],
    ["CA00000094", "Temecula Olive Oil Company", "Factory Tour", "Olive oil tasting and tours", "28720 Via Montezuma", "Temecula", "92590", "Taste and learn about olive oil production on a guided tour", "No", "Yes", "Yes", "Indoors", "Monday-Saturday 10am-4pm", "Free", "No", "Olive Oil Tasting Factory Tour"],
    ["CA00000095", "Yosemite National Park", "National Park", "Explore stunning landscapes", "9035 Village Drive", "Yosemite Village", "95389", "Discover iconic landscapes and natural wonders in Yosemite", "No", "Yes", "Yes", "Outdoors", "24/7", "Entry Fee", "No", "National Park Scenic Nature"],
    ["CA00000096", "Great America", "Theme Park", "Amusement rides and attractions", "4701 Great America Parkway", "Santa Clara", "95054", "Enjoy rides, shows, and attractions at a theme park", "No", "Yes", "Yes", "Outdoors", "Daily 10am-6pm", "Admission Fee", "Yes", "Theme Park Rides Entertainment"],
    ["CA00000097", "Muir Beach", "Beach", "Relax and explore", "Muir Beach", "Muir Beach", "94965", "Enjoy a tranquil beach with scenic views and exploration opportunities", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Beach Scenic Relaxation"],
    ["CA00000098", "Pfeiffer Beach", "Beach", "Unique rock formations and relaxation", "Big Sur", "Big Sur", "93920", "Explore unique rock formations and enjoy the beach", "Free", "Yes", "Yes", "Outdoors", "24/7", "Free", "No", "Beach Rock Formations Scenic"],
    ["CA00000099", "Santa Cruz Museum of Art & History", "Museum", "Explore local art and history", "705 Front Street", "Santa Cruz", "95060", "Discover local art and history exhibits in Santa Cruz", "No", "Yes", "Yes", "Indoors", "Tuesday-Sunday 11am-5pm", "Admission Fee", "Yes", "Art History Museum Exhibits"],
    ["CA00000100", "California State Fair", "Fair", "Annual fair with exhibits and entertainment", "1600 Exposition Boulevard", "Sacramento", "95815", "Enjoy exhibits, rides, and entertainment at the state fair", "No", "Yes", "Yes", "Outdoors", "Varies by event", "Ticket Price", "Yes", "Fair Exhibits Entertainment Rides"]
]