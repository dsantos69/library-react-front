import {
    styled,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    Box,
    Slide
} from '@mui/material';
import { forwardRef, useContext } from 'react';
import { RentsContext } from '../../../context/RentsContext';

export default function RentsDeleteDialog() {
    const { showDeleteDialog, deleteRent, closeDeleteConfirm } = useContext(RentsContext);

    const DialogConfig = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2)
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1)
        }
    }));

    const Transition = forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    return (
        <DialogConfig
            maxWidth="200px"
            open={showDeleteDialog}
            TransitionComponent={Transition}
            sx={{ padding: '3rem' }}>
            <DialogTitle sx={{ textAlign: 'center', fontSize: '20px' }}>Deletar Aluguel</DialogTitle>
            <Box component="form" onSubmit={deleteRent}>
                <DialogContent sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Deseja realmente deletar esse aluguel?
                    </Typography>
                    <Typography variant="subtitle2">Todas relações com esse aluguel serão excluídas.</Typography>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center', mr: 2 }}>
                    <Button color="success" variant="contained" onClick={closeDeleteConfirm}>
                        Cancelar
                    </Button>
                    <Button type="submit" variant="contained" color="error">
                        Deletar
                    </Button>
                </DialogActions>
            </Box>
        </DialogConfig>
    );
}
