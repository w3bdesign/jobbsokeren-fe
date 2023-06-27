import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface PathProps {
    pathname: string;
}

const JobbsokerenButton: React.FC<PathProps> = ({pathname}) => (
    pathname !== '/jobbsokeren' ? (
        <RouterLink className="w-full" to="/jobbsokeren">
            <button className="px-8 py-3">Prøv jobbsøkeren nå</button>
        </RouterLink>
    ) : null
);

export default JobbsokerenButton;
