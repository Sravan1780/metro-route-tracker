import React, { useEffect, useRef } from 'react';
import { GraphVisualizer } from 'graphijs';

function GraphCanvas({ graph, highlightedPath = [] }) {
  const graphRef = useRef(null);

  useEffect(() => {
    if (!graph) {
      console.warn('No graph provided to GraphCanvas');
      return;
    }

    const visualizer = new GraphVisualizer();
    
    const config = {
      directed: false,
      showWeights: true,
      layout: 'force',
    };

    if (highlightedPath && highlightedPath.length > 0) {
      config.highlightedPath = highlightedPath;
    }

    visualizer.visualize(graph, graphRef.current.id, config);

    return () => {
      try {
        visualizer.destroy();
      } catch (error) {
        console.warn('Error destroying visualizer:', error);
      }
    };
  }, [graph, highlightedPath]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>
        🗺️ Hyderabad Metro Network
      </h2>
      <div
        id="metro-graph"
        ref={graphRef}
        className="w-full h-96 border border-gray-200 rounded-lg bg-gray-50"
      ></div>
    </div>
  );
}

export default GraphCanvas;