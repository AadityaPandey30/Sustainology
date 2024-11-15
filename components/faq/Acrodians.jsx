import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const ResponsiveAccordion = ({ faqs, expand, expandValue, handleChange }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Accordion
                    sx={{
                        background: 'transparent',
                        boxShadow: 'none',
                        borderBottom: '1px solid #E5E5E5',
                        width: '100%', // Ensure accordion takes full width initially
                        padding: '16px 24px',

                        '&.Mui-expanded': {
                            boxShadow: '2px 2px 5px #67696475',
                        },
                    }}
                    expanded={expandValue === expand}
                    onChange={handleChange(expandValue)}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography
                            sx={{
                                color: '#808080',
                                fontWeight: '600',
                                lineHeight: '29.83px',
                                fontSize: ['18px', '22px'], // 18px for mobile, 22px for other devices
                                display: 'flex',
                                alignItems: 'start',
                                fontFamily:
                                    "'__Darker_Grotesque_9864f3', '__Darker_Grotesque_Fallback_9864f3'",
                            }}
                        >
                            <FiberManualRecordIcon
                                sx={{
                                    fontSize: 'small',
                                    color: '#60718F',
                                    marginTop: '10px',
                                }}
                            />
                            <span
                                className="capitalize"
                                style={{ marginLeft: '8px' }}
                            >
                                {faqs?.question || ''}
                            </span>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            width: '100%', // Ensure accordion details take full width
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: '500',
                                fontSize: '18px',
                                lineHeight: '24px',
                                color: '#808080',
                                marginLeft: '25px',
                                width: '100%', // Ensure answer takes full width
                                fontFamily:
                                    "'__Darker_Grotesque_9864f3', '__Darker_Grotesque_Fallback_9864f3'",
                            }}
                        >
                            {faqs?.answer || ''}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    );
};

export default ResponsiveAccordion;
