import { PrimaryBtn } from './PrimaryBtn';

interface Props {
    heading?: string;
    subtitle?: string;
    btnTitle?: string;
    btnUrl?: string;
    arrow?: boolean;
}

export const Heading = ({
    heading = 'title',
    subtitle,
    btnTitle,
    btnUrl,
    arrow
}: Props) => {
    return (
        <>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                {heading}
            </h1>
            {subtitle && (
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    {subtitle}
                </p>
            )}
            {btnTitle && btnUrl && (
                <PrimaryBtn btnTitle={btnTitle} btnUrl={btnUrl} arrow={arrow} />
            )}
        </>
    );
};