// pages/SearchResultPage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchResultPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      // Define the endpoints to search across
      const endpoints = [
        'http://localhost:3000/posts',
        'http://localhost:3000/users',
        'http://localhost:3000/albums',
        'http://localhost:3000/comments',
        'http://localhost:3000/photos',
        'http://localhost:3000/cars',
        'http://localhost:3000/cities',
        'http://localhost:3000/todos',
        'http://localhost:3000/students',
      ];

      // Send requests to all endpoints
      axios
        .all(endpoints.map((endpoint) =>
          axios.get(endpoint, {
            params: { q: query }, // Search by query parameter
          })
        ))
        .then((responses) => {
          // Combine all results from each endpoint
          const combinedResults = responses.flatMap(response => response.data);
          setResults(combinedResults);
          setLoading(false);
        })
        .catch((error) => {
          setError('An error occurred while fetching data');
          setLoading(false);
        });
    }
  }, [query]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              <h3>{result.title || result.name || `Result ${index + 1}`}</h3>
              <p>{result.body || result.description || JSON.stringify(result)}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found for "{query}"</p>
      )}
    </div>
  );
};

export default SearchResultPage;

