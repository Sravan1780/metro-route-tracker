import {UndirectedWeightedGraph} from "graphijs"
import { useState } from "react";
import Header from "./Header";
import GraphCanvas from "./GraphCanvas";
import Footer from "./Footer";

const g = new UndirectedWeightedGraph();

g.addNode("MG Bus Station");
g.addLink("MG Bus Station", "Sultan Bazaar", 0.7);
g.addLink("Sultan Bazaar", "Narayanaguda", 1.3);
g.addLink("Narayanaguda", "Chikkadpally", 0.9);
g.addLink("Chikkadpally", "RTC X Roads", 0.8);
g.addLink("RTC X Roads", "Musheerabad", 1.2);
g.addLink("Musheerabad", "Gandhi Hospital", 0.9);
g.addLink("Gandhi Hospital", "Secunderabad West", 1.2);
g.addLink("Secunderabad West", "JBS Parade Ground", 1.3);
g.addLink("MG Bus Station", "Osmania Medical College", 0.6);
g.addLink("Osmania Medical College", "Gandhi Bhavan", 1.0);
g.addLink("Gandhi Bhavan", "Nampally", 0.8);
g.addLink("Nampally", "Assembly", 0.7);
g.addLink("Assembly", "Lakdi-ka-pul", 1.0);
g.addLink("Lakdi-ka-pul", "Khairatabad", 1.1);
g.addLink("Khairatabad", "Irrum Manzil", 1.2);
g.addLink("Irrum Manzil", "Punjagutta", 1.0);
g.addLink("Punjagutta", "Ameerpet", 1.1);
g.addLink("Ameerpet", "S.R Nagar", 0.7);
g.addLink("S.R Nagar", "ESI Hospital", 0.7);
g.addLink("ESI Hospital", "Erragadda", 1.2);
g.addLink("Erragadda", "Bharat Nagar", 0.8);
g.addLink("Bharat Nagar", "Moosapet", 1.0);
g.addLink("Moosapet", "Balanagar", 0.7);
g.addLink("Balanagar", "Kukatpally", 1.4);
g.addLink("Kukatpally", "K.P.H.B. Colony", 1.5);
g.addLink("K.P.H.B. Colony", "J.N.T.U College", 1.5);
g.addLink("J.N.T.U College", "Miyapur", 1.8);
g.addLink("MG Bus Station", "Malakpet", 0.9);
g.addLink("Malakpet", "New Market", 1.1);
g.addLink("New Market", "Musarambagh", 1.0);
g.addLink("Musarambagh", "Dilsukhnagar", 1.5);
g.addLink("Dilsukhnagar", "Chaitanyapuri", 1.1);
g.addLink("Chaitanyapuri", "Victoria Memorial", 1.2);
g.addLink("Victoria Memorial", "L.B. Nagar", 1.4);
g.addLink("JBS Parade Ground", "Parade Ground", 0);
g.addLink("Parade Ground", "Secunderabad East", 1.6);
g.addLink("Secunderabad East", "Mettuguda", 1.9);
g.addLink("Mettuguda", "Tarnaka", 1.3);
g.addLink("Tarnaka", "Habsiguda", 1.6);
g.addLink("Habsiguda", "NGRI", 0.9);
g.addLink("NGRI", "Stadium", 1.2);
g.addLink("Stadium", "Uppal", 1.1);
g.addLink("Uppal", "Nagole", 1.0);
g.addLink("Parade Ground", "Paradise", 1.2);
g.addLink("Paradise", "Rasoolpura", 1.0);
g.addLink("Rasoolpura", "Prakash Nagar", 1.1);
g.addLink("Prakash Nagar", "Begumpet", 1.4);
g.addLink("Begumpet", "Ameerpet", 1.6);
g.addLink("Ameerpet", "Madhura Nagar", 0.7);
g.addLink("Madhura Nagar", "Yousufguda", 1.4);
g.addLink("Yousufguda", "Jubilee Hills Road No. 5", 0.9);
g.addLink("Jubilee Hills Road No. 5", "Jubilee Hills Check Post", 0.6);
g.addLink("Jubilee Hills Check Post", "Peddamma Gudi", 0.9);
g.addLink("Peddamma Gudi", "Madhapur", 1.5);
g.addLink("Madhapur", "Durgam Cheruvu", 1.7);
g.addLink("Durgam Cheruvu", "HITEC City", 0.8);
g.addLink("HITEC City", "Raidurg", 1.5);
g.setMainNode("MG Bus Station");
g.setMainNode("Parade Ground");
g.setMainNode("Ameerpet");
g.setMainNode("L.B. Nagar");
g.setMainNode("Nagole");
g.setMainNode("Miyapur");
g.setMainNode("Raidurg");

function LandingPage() {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [path, setPath] = useState([]);
  const [distance, setDistance] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const nodes = g.nodes();
  console.log(nodes);

  const handleSubmit = () => {
    if (!fromStation || !toStation) {
      alert("Please select both stations");
      return;
    }
    if (fromStation === toStation) {
      alert("Please select different stations");
      return;
    }
    
    const { path: curPath, distance: curDistance } = g.dijkstra(
      fromStation,
      toStation
    );
    setPath(curPath);
    setDistance(curDistance);
    setIsFormSubmitted(true);
  };

  const handleReset = () => {
    setFromStation("");
    setToStation("");
    setPath([]);
    setDistance(null);
    setIsFormSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Shortest Metro Route
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover the most efficient path between Hyderabad Metro stations with our intelligent route finder
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            🚇 Plan Your Journey
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  🚩 From Station
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  value={fromStation}
                  onChange={(e) => setFromStation(e.target.value)}
                >
                  <option value="">Select departure station</option>
                  {nodes.map((node, index) => (
                    <option key={index} value={node}>
                      {node}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  🎯 To Station
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  value={toStation}
                  onChange={(e) => setToStation(e.target.value)}
                >
                  <option value="">Select destination station</option>
                  {nodes.map((node, index) => (
                    <option key={index} value={node}>
                      {node}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                🔍 Find Route
              </button>
              {isFormSubmitted && (
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                >
                  🔄 Reset
                </button>
              )}
            </div>
          </div>
        </div>

        <div className={`grid ${isFormSubmitted && path.length > 0 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} gap-8`}>
          <div className={isFormSubmitted && path.length > 0 ? 'order-2 lg:order-1' : ''}>
            <GraphCanvas graph={g} highlightedPath={path} />
          </div>

          {isFormSubmitted && path && path.length > 0 && (
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                  ✨ Your Optimal Route
                </h2>
                
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600">From:</span>
                    <span className="font-bold text-blue-800">{fromStation}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600">To:</span>
                    <span className="font-bold text-blue-800">{toStation}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    🛤️ Route Details
                  </h3>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {path.map((station, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-bold mr-3 flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <span className="text-gray-800 font-medium">{station}</span>
                          <div className="flex items-center mt-1">
                            {index === 0 && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Start</span>}
                            {index === path.length - 1 && <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">End</span>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                  <p className="text-2xl font-bold text-green-700 mb-1">
                    📏 {distance?.toFixed(1)} km
                  </p>
                  <p className="text-sm text-green-600">
                    🚇 {path.length} stations • ⏱️ Est. {Math.ceil(path.length * 2)} minutes
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Metro Minimize?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Get your optimal route in seconds with our advanced pathfinding algorithm</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Accurate Routes</h3>
              <p className="text-gray-600">Real-time data ensures you get the most efficient path every time</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">User Friendly</h3>
              <p className="text-gray-600">Simple, intuitive interface designed for seamless navigation</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;