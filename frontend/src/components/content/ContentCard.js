import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import capitalize from '../../utils/helpers'

const ContentCard = ({ platform, pageName, media, caption, engagement }) => {
  return (
    <Card sx={{ width: '600px', height: '600px', m: 3 }}>
      <CardHeader
        subheader={ `${pageName} on ${capitalize(platform.split('_')[0])} - Engagement: ${engagement} `}/>
      {
        media
          ? <CardMedia height="70%"component="img" image={media} alt= "Post media"/>
          : <Typography variant='subheading'>Could not fetch image</Typography>

      }
      <CardContent >
        {<Typography sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: '',
          WebkitBoxOrient: 'vertical'
        }} variant="body2" color="text.secondary" component="p">
          {caption ? capitalize(caption) : ''}
        </Typography>}
      </CardContent>
    </Card>
  )
}

ContentCard.propTypes = {
  pageName: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  media: PropTypes.string,
  caption: PropTypes.string,
  engagement: PropTypes.number
}

export default ContentCard
