import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Search as SearchIcon, FileText, Settings } from 'lucide-react';
import Link from 'next/link';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.background.secondary};
`;

const SearchHeader = styled.div`
  background: ${props => props.theme.gradients.hero};
  padding: 3rem 0;
  color: ${props => props.theme.background.card};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SearchBox = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 0.75rem;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 1rem 1rem 1rem 3.5rem;
  font-size: 1.125rem;
  border: none;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  font-family: inherit;
  
  &:focus {
    outline: 2px solid var(--accent-cyan);
    outline-offset: 2px;
  }
  
  &::placeholder {
    color: var(--medium-gray);
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--medium-gray);
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const SearchButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${props => props.theme.background.card};
  color: var(--primary-blue);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-md);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;

const ResultsSection = styled.section`
  padding: 3rem 0;
`;

const ResultsHeader = styled.div`
  margin-bottom: 2rem;
`;

const ResultsCount = styled.p`
  color: var(--medium-gray);
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ResultsTitle = styled.h1`
  font-size: 2rem;
  color: var(--dark-gray);
  margin: 0;
`;

const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ResultCard = styled(Link)`
  display: block;
  background: ${props => props.theme.background.card};
  padding: 1.75rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-gray);
  text-decoration: none;
  transition: all var(--transition-base);
  
  &:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
    border-color: var(--primary-blue);
  }
`;

const ResultHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

const ResultIcon = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: var(--accent-blue);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-blue);
`;

const ResultContent = styled.div`
  flex: 1;
`;

const ResultTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--dark-gray);
  margin: 0 0 0.5rem 0;
`;

const ResultPath = styled.div`
  font-size: 0.875rem;
  color: var(--success-green);
  margin-bottom: 0.5rem;
`;

const ResultDescription = styled.p`
  color: var(--medium-gray);
  line-height: 1.6;
  margin: 0;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  
  h2 {
    font-size: 1.5rem;
    color: var(--dark-gray);
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--medium-gray);
    font-size: 1.125rem;
  }
`;

const SEARCH_DATA = [
    {
        title: 'About Us',
        path: '/about',
        description: 'Learn more about VtechSecure and our mission to provide cutting-edge IT solutions.',
        category: 'page'
    },
    {
        title: 'IT Support Services',
        path: '/services',
        description: 'Comprehensive IT support including help desk, desktop support, and user training.',
        category: 'service'
    },
    {
        title: 'Network Management',
        path: '/services',
        description: 'Computer networking, router configuration, firewall management, and VPN setup.',
        category: 'service'
    },
    {
        title: 'Server Management',
        path: '/services',
        description: 'Server installation, monitoring, virtualization, and backup solutions.',
        category: 'service'
    },
    {
        title: 'Cybersecurity',
        path: '/services',
        description: 'Threat monitoring, vulnerability management, and security audits.',
        category: 'service'
    },
    {
        title: 'Cloud Services',
        path: '/services',
        description: 'Cloud infrastructure management, migration, and security optimization.',
        category: 'service'
    },
    {
        title: 'Contact Us',
        path: '/contact',
        description: 'Get in touch with our team for any inquiries or support needs.',
        category: 'page'
    },
    {
        title: 'Hardware Products',
        path: '/hardware',
        description: 'Browse our selection of enterprise-grade hardware solutions.',
        category: 'products'
    },
    {
        title: 'Software Solutions',
        path: '/software',
        description: 'Explore our software offerings for business productivity and security.',
        category: 'products'
    }
];

function Search() {
    const router = useRouter();
    const { q } = router.query;
    const [searchQuery, setSearchQuery] = useState(q || '');
    const [results, setResults] = useState([]);

    React.useEffect(() => {
        if (q) {
            performSearch(q);
        }
    }, [q]);

    const performSearch = (query) => {
        if (!query || query.trim() === '') {
            setResults([]);
            return;
        }

        const searchTerm = query.toLowerCase().trim();
        const filtered = SEARCH_DATA.filter(item =>
            item.title.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
        );

        setResults(filtered);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
            performSearch(searchQuery);
        }
    };

    const getIcon = (category) => {
        switch (category) {
            case 'service':
                return <Settings size={20} />;
            case 'products':
                return <SearchIcon size={20} />;
            default:
                return <FileText size={20} />;
        }
    };

    return (
        <PageContainer>
            <Head>
                <title>{q ? `Search Results for "${q}"` : 'Search'} - VtechSecure</title>
                <meta name="description" content="Search VtechSecure website" />
            </Head>

            <SearchHeader>
                <Container>
                    <SearchBox>
                        <form onSubmit={handleSearch}>
                            <SearchInputWrapper>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <SearchInput
                                    type="text"
                                    placeholder="Search for services, products, or information..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    autoFocus
                                />
                                <SearchButton type="submit">Search</SearchButton>
                            </SearchInputWrapper>
                        </form>
                    </SearchBox>
                </Container>
            </SearchHeader>

            <ResultsSection>
                <Container>
                    {q && (
                        <ResultsHeader>
                            <ResultsCount>
                                Found {results.length} result{results.length !== 1 ? 's' : ''}
                            </ResultsCount>
                            <ResultsTitle>Search results for "{q}"</ResultsTitle>
                        </ResultsHeader>
                    )}

                    {results.length > 0 ? (
                        <ResultsList>
                            {results.map((result, index) => (
                                <ResultCard key={index} href={result.path}>
                                    <ResultHeader>
                                        <ResultIcon>
                                            {getIcon(result.category)}
                                        </ResultIcon>
                                        <ResultContent>
                                            <ResultTitle>{result.title}</ResultTitle>
                                            <ResultPath>{window.location.origin}{result.path}</ResultPath>
                                        </ResultContent>
                                    </ResultHeader>
                                    <ResultDescription>{result.description}</ResultDescription>
                                </ResultCard>
                            ))}
                        </ResultsList>
                    ) : q ? (
                        <NoResults>
                            <h2>No results found</h2>
                            <p>Try different keywords or browse our services pages</p>
                        </NoResults>
                    ) : (
                        <NoResults>
                            <h2>Start searching</h2>
                            <p>Enter a search term above to find what you're looking for</p>
                        </NoResults>
                    )}
                </Container>
            </ResultsSection>
        </PageContainer>
    );
}

export default Search;
