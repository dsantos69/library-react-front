import { ArrowForward, Group } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

export default function CustomersTotal() {
    return (
        <Card sx={{ minWidth: 275, m: 1, p: 1 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    <Group /> Clientes
                </Typography>
                <Typography sx={{ mt: 1 }} color="text.secondary">
                    Total
                </Typography>
                <Typography variant="h6">50 Clientes</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{ ml: 'auto' }}>
                    Ir para clientes <ArrowForward sx={{ ml: 1, fontSize: '1.2rem' }} />
                </Button>
            </CardActions>
        </Card>
    );
}