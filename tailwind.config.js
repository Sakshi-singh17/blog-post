/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // Reset all default prose styles
            color: 'inherit',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            fontWeight: 'inherit',
            margin: '0',
            padding: '0',
            
            // Custom heading styles
            h1: {
              fontSize: '5rem',
              fontWeight: '700',
              color: '#0f172a',
              marginTop: '2rem',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              fontWeight: 'bold',
            },
            
            h2: {
              fontSize: '2rem',
              fontWeight: '600',
              color: '#1e293b',
              marginTop: '2.5rem', // was 2rem
              marginBottom: '1.25rem', // was 1rem
              lineHeight: '1.3',
            },
            
            h3: {
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1e293b',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
              lineHeight: '1.4',
            },
            
            h4: {
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1e293b',
              marginTop: '1.25rem',
              marginBottom: '0.5rem',
              lineHeight: '1.4',
            },
            
            // Custom paragraph styles
            p: {
              fontSize: '1rem',
              lineHeight: '1.75',
              color: '#334155',
              marginTop: '1rem',
              marginBottom: '1.5rem', // was 1rem
              textAlign: 'justify',   // NEW: makes blog text neat
            },
            
            // Custom blockquote styles
            blockquote: {
              fontStyle: 'italic',
              borderLeft: '4px solid #a855f7',
              paddingLeft: '1rem',
              color: '#7e22ce',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              fontSize: '1.125rem',
              lineHeight: '1.6',
            },
            
            // Custom link styles
            a: {
              color: '#6366f1',
              textDecoration: 'underline',
              textDecorationColor: '#6366f1',
              '&:hover': {
                color: '#4f46e5',
                textDecorationColor: '#4f46e5',
              },
            },
            
            // Custom list styles
            ul: {
              listStyleType: 'disc',
              paddingLeft: '1.5rem',
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            
            ol: {
              listStyleType: 'decimal',
              paddingLeft: '1.5rem',
              marginTop: '1rem',
              marginBottom: '1rem',
            },
            
            li: {
              marginTop: '0.25rem',
              marginBottom: '0.25rem',
              lineHeight: '1.6',
            },
            
            'li > ul, li > ol': {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            
            // Custom code styles
            code: {
              backgroundColor: '#f1f5f9',
              color: '#1e293b',
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
              fontWeight: '500',
            },
            
            pre: {
              backgroundColor: '#1e293b',
              color: '#e2e8f0',
              padding: '1rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              fontSize: '0.875rem',
              lineHeight: '1.5',
            },
            
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
              fontSize: 'inherit',
            },
            
            // Custom table styles
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            
            'th, td': {
              border: '1px solid #e2e8f0',
              padding: '0.75rem',
              textAlign: 'left',
              verticalAlign: 'top',
            },
            
            th: {
              backgroundColor: '#f8fafc',
              fontWeight: '600',
              color: '#1e293b',
            },
            
            // Custom horizontal rule
            hr: {
              border: 'none',
              borderTop: '1px solid #e2e8f0',
              marginTop: '4rem',
              marginBottom: '4rem',
            },
            
            // Custom strong and emphasis
            strong: {
              fontWeight: '600',
              color: '#1e293b',
            },
            
            em: {
              fontStyle: 'italic',
            },
          },
        },

        // Dark mode customizations
        invert: {
          css: {
            h1: {
              color: '#f8fafc',
            },
            
            h2: {
              color: '#f1f5f9',
            },
            
            h3: {
              color: '#f1f5f9',
            },
            
            h4: {
              color: '#f1f5f9',
            },
            
            p: {
              color: '#cbd5e1',
            },
            
            blockquote: {
              color: '#d8b4fe',
              borderLeftColor: '#a855f7',
            },
            
            a: {
              color: '#818cf8',
              textDecorationColor: '#818cf8',
              '&:hover': {
                color: '#6366f1',
                textDecorationColor: '#6366f1',
              },
            },
            
            code: {
              backgroundColor: '#334155',
              color: '#e2e8f0',
            },
            
            pre: {
              backgroundColor: '#0f172a',
              color: '#e2e8f0',
            },
            
            'th, td': {
              borderColor: '#475569',
            },
            
            th: {
              backgroundColor: '#1e293b',
              color: '#f1f5f9',
            },
            
            strong: {
              color: '#f1f5f9',
            },
            
            hr: {
              borderTopColor: '#475569',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}; 